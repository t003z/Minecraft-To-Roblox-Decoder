const path = require("path");
const zlib = require("zlib");
const { Schematic } = require("prismarine-schematic");
const Block = require("prismarine-block");
const fastify = require("fastify")({
  logger: false,
});

fastify.post("/decode", async function (request, reply) {
  try {
    var schematicBuffer = Buffer.from(request.body, "base64");
    var schematic = await Schematic.read(schematicBuffer);
    var response = {
      blocks: {},
      failed: false,
      count: 0,
      states: schematic.palette,
    };
    var count = 0;
    var rawCount = 0;
    var total = schematic.blocks.length;
    schematic.forEach(function (block, position) {
      var pos = [position.x, position.y, position.z];
      var key = count + 1;
      var state = schematic.getBlockStateId(position);
      if (block.name !== "air") {
        rawCount += 1;
        response.blocks[parseInt(key)] = {
          name: block.name,
          position: pos,
          state: state,
          properties: block.getProperties(),
        };
      }
      count += 1;
      if (count >= total) {
        response.count = rawCount;
        reply.send(response);
      }
    });
  } catch (e) {
    console.log(e);
    reply.code(400).send({ failed: true, error: e });
  }
});

fastify.listen(process.env.PORT, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Your app is listening on ${address}`);
  fastify.log.info(`server listening on ${address}`);
});
