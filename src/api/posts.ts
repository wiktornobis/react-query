import axios from "axios";

export default async function getPosts(lang: string) {
    const res = await axios
        .get("https://api-dbw.stat.gov.pl/api/1.1.0/area/area-area", {
            params: {
                lang
            },
        });
    return res.data;
}

