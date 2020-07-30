/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.2.10
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EarningsRate } from '././earningsRate';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EarningsRateObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'earningsRate'?: EarningsRate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "earningsRate",
            "baseName": "earningsRate",
            "type": "EarningsRate"
        }    ];

    static getAttributeTypeMap() {
        return EarningsRateObject.attributeTypeMap;
    }
}

