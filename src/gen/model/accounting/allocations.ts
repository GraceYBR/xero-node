/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Allocation } from '././allocation';

export class Allocations {
    'allocations'?: Array<Allocation>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allocations",
            "baseName": "Allocations",
            "type": "Array<Allocation>"
        }    ];

    static getAttributeTypeMap() {
        return Allocations.attributeTypeMap;
    }
}

