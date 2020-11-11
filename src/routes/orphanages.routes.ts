import { Router } from "express";
import { getRepository } from "typeorm";
import multer from "multer";

import uploadConfig from "../config/upload";

import Orphanages from "../entities/Orphanages";

const upload = multer(uploadConfig);

const orphanagesRouter = Router();

orphanagesRouter.get("/detail/:id", async (request, response) => {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanages);
    const orphanage = await orphanagesRepository.findOneOrFail(id);

    return response.json(orphanage);
});

orphanagesRouter.get("/", async (request, response) => {
    const orphanagesRepository = getRepository(Orphanages);
    const orphanages = await orphanagesRepository.find();

    return response.json(orphanages);
});

orphanagesRouter.post(
    "/",
    upload.array("images"),
    async (request, response) => {
        const requestImage = request.files as Express.Multer.File[];
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;

        const image = requestImage.map((images) => {
            return { path: images.filename };
        });

        const orphanagesRepository = getRepository(Orphanages);

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            image,
        });

        await orphanagesRepository.save(orphanage);
        return response.status(201).json(orphanage);
    }
);

export default orphanagesRouter;
