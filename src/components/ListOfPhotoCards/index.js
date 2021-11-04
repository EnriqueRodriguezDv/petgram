import React from 'react';

import { PhotoCard } from "../PhotoCard"
import { Ul } from "../PhotoCard/styles"

export const ListOfPhotoCardsComponent = ({data: {photos = []}} = {}) => {
    return (
        <Ul>
            {photos.map(item => <PhotoCard key={item.id} {...item} />)}
        </Ul>
    );
};
