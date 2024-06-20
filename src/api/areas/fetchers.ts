import {BASE_URL} from "../../constants/variables";
import {BasicResponse} from "../common/types";
import {Areas} from "./types";

export const fetchAreas = async (): Promise<BasicResponse<Areas[]>> => {
    const response = await fetch(`${BASE_URL}`);

    if (response.ok) {
        return await response.json();
    }

    throw new Error("Failed to fetch data.");
};
