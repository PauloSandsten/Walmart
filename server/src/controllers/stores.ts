import fs from "fs";
import { Request, Response } from "express";
import { findStoresByQuery } from "../useCases";
import { isZip } from "../utils";
import { highLatencyZip } from "../common/objects";

const stores = async (req: Request, res: Response) => {
  /**
   * Assume that the Store GraphQL API is not reliable or fast.
   * To provide the best experience to your initial launch market,
   * please ensure that uptime is high and response times are low
   * for the following zip codes: 97217, 72712, 04210, 02169, 32808.
   */
  const query = req.query?.query as string;
  const maxResults = Number(req.query?.maxResults) || 25;
  const radius = Number(req.query?.radius) || 50;

  if (!query) return res.json([]);

  if (isZip(query ?? 0) && highLatencyZip[query]) {
    /**
     * @Rule
     * - If the zip code is a "high latency", we will fetch the store data
     *   from static files that are created during the build (CI) or if you
     *   want to do it yourself, you can so with "npm run zipCodes".
     */
    try {
      const readZipCodeFile = () => {
        return new Promise<string>((resolve, _reject) => {
          let rawdata = fs
            .readFileSync(`./src/static/${query}.json`)
            .toString();

          let stores = JSON.parse(rawdata);
          resolve(stores);
        });
      };
      const response = await readZipCodeFile();
      return res.json(response);
    } catch (error) {
      return res.json([]);
    }
  }

  try {
    const response = await findStoresByQuery({ query, maxResults, radius });
    return res.json(response);
  } catch (error) {
    // As useCases logs the error for now as we don't have an error handling
    // mechanism for this challenge, we will just send back a more user-friendly
    // "error": we just send back an empty array.
    return res.json([]);
  }
};

export { stores };
