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


export class Address {
    /**
    * define the type of address
    */
    'addressType'?: Address.AddressTypeEnum;
    /**
    * max length = 500
    */
    'addressLine1'?: string;
    /**
    * max length = 500
    */
    'addressLine2'?: string;
    /**
    * max length = 500
    */
    'addressLine3'?: string;
    /**
    * max length = 500
    */
    'addressLine4'?: string;
    /**
    * max length = 255
    */
    'city'?: string;
    /**
    * max length = 255
    */
    'region'?: string;
    /**
    * max length = 50
    */
    'postalCode'?: string;
    /**
    * max length = 50, [A-Z], [a-z] only
    */
    'country'?: string;
    /**
    * max length = 255
    */
    'attentionTo'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "addressType",
            "baseName": "AddressType",
            "type": "Address.AddressTypeEnum"
        },
        {
            "name": "addressLine1",
            "baseName": "AddressLine1",
            "type": "string"
        },
        {
            "name": "addressLine2",
            "baseName": "AddressLine2",
            "type": "string"
        },
        {
            "name": "addressLine3",
            "baseName": "AddressLine3",
            "type": "string"
        },
        {
            "name": "addressLine4",
            "baseName": "AddressLine4",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "City",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "Region",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "PostalCode",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "attentionTo",
            "baseName": "AttentionTo",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}

export namespace Address {
    export enum AddressTypeEnum {
        POBOX = <any> 'POBOX',
        STREET = <any> 'STREET',
        DELIVERY = <any> 'DELIVERY'
    }
}
