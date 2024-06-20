import { useQuery, QueryClient } from "react-query";
import { fetchAreas } from "./fetchers";
import { BasicResponse } from "../common/types";
import { Areas } from "./types";

enum QueryKeys {
    AREAS = "AREAS",
}

export const useAREAS = () =>
    useQuery<BasicResponse<Areas[]>, Error>({
        queryKey: [QueryKeys.AREAS],
        queryFn: fetchAreas,
    });

export const prefetchAREAS = async (queryClient: QueryClient) =>
    await queryClient.prefetchQuery({
        queryKey: [QueryKeys.AREAS],
        queryFn: fetchAreas,
    });
