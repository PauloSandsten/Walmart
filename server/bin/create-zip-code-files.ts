import fs from "fs";
import "isomorphic-fetch";
import { findStoresByQuery } from "../src/useCases";
import { highLatencyZip } from "../src/common/objects";

const getZips = async () => {
  const promises = Object.keys(highLatencyZip).map(async (z) => {
    try {
      const response = await findStoresByQuery({ query: z });
      fs.writeFileSync(`./src/static/${z}.json`, JSON.stringify(response));
      return response;
    } catch (error) {
      console.error(error);
      return 0;
    }
  });

  const allZips = await Promise.all(promises);
  return allZips;
};

const getAndWriteZips = async () => {
  await getZips();
  console.log("Finished writing files");
};
getAndWriteZips();
