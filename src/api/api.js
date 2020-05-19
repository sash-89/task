import * as axios from "axios";

const instance=axios.create({
    baseURL: "https://pixabay.com/api/",
});

export const countriesImageAPI = {
    async countriesImg(country) {
        try {
            const response = await instance(`?key=11740937-912a062c355ec2822153fb343&q=${country}`);
            return {img: response.data.hits[0].webformatURL, country}
        } catch (error) {
            if (error.response) {
                return error.response
            }
        }
    },
    async countryImages(country) {
        try {
            const response = await instance(`?key=11740937-912a062c355ec2822153fb343&q=${country}`);
            return  response.data.hits.map((img)=> img.webformatURL)
        } catch (error) {
            if (error.response) {
                return error.response
            }
        }
    }
};