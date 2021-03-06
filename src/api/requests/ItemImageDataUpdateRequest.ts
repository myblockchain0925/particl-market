// Copyright (c) 2017-2019, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE

import {IsEnum, IsNotEmpty, ValidateIf} from 'class-validator';
import { RequestBody } from '../../core/api/RequestBody';
import { ImageDataProtocolType } from '../enums/ImageDataProtocolType';
import {ImageVersion} from '../../core/helpers/ImageVersion';

// tslint:disable:variable-name
export class ItemImageDataUpdateRequest extends RequestBody {

    @IsNotEmpty()
    public item_image_id: number;

    // @IsNotEmpty()
    public dataId: string | null;

    @IsNotEmpty()
    public protocol: ImageDataProtocolType;

    @IsNotEmpty()
    public imageVersion: string;

    @IsNotEmpty()
    public imageHash: string;

    // @IsNotEmpty()
    public encoding: string | null;

    // @IsNotEmpty()
    public data: string;

    // @IsNotEmpty()
    public originalMime: string | null;

    // @IsNotEmpty()
    public originalName: string | null;
}
// tslint:enable:variable-name
