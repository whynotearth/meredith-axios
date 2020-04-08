// swagger API docs: https://stagingapi.whynot.earth/index.html
const { codegen } = require("swagger-axios-codegen");
const BASE_API = "https://stagingapi.whynot.earth";

codegen({
  methodNameMode: "path",
  remoteUrl: `${BASE_API}/swagger/v0/swagger.json`,
  useStaticMethod: true,
  outputDir: "./temp/",
  fileName: "index.ts",
});
