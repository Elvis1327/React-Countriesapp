export interface CountriesProps {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag?:        string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        CoatOfArms;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    borders?:     string[];
    postalCode?:  PostalCode;
    cioc?:        string;
    gini?:        { [key: string]: number };
    fifa?:        string;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR?: Aed;
    AUD?: Aed;
    KID?: Aed;
    XOF?: Aed;
    LBP?: Aed;
    JMD?: Aed;
    FKP?: Aed;
    KMF?: Aed;
    ZWL?: Aed;
    XAF?: Aed;
    NZD?: Aed;
    ETB?: Aed;
    XPF?: Aed;
    XCD?: Aed;
    GIP?: Aed;
    USD?: Aed;
    SHP?: Aed;
    CAD?: Aed;
    KES?: Aed;
    CVE?: Aed;
    CKD?: Aed;
    GEL?: Aed;
    SBD?: Aed;
    CNY?: Aed;
    RWF?: Aed;
    BYN?: Aed;
    PKR?: Aed;
    UYU?: Aed;
    ERN?: Aed;
    ZAR?: Aed;
    ZMW?: Aed;
    LAK?: Aed;
    LRD?: Aed;
    UGX?: Aed;
    GTQ?: Aed;
    NOK?: Aed;
    MMK?: Aed;
    DOP?: Aed;
    TJS?: Aed;
    VES?: Aed;
    MDL?: Aed;
    SEK?: Aed;
    MVR?: Aed;
    GYD?: Aed;
    PHP?: Aed;
    KHR?: Aed;
    MNT?: Aed;
    SYP?: Aed;
    ILS?: Aed;
    MZN?: Aed;
    AMD?: Aed;
    WST?: Aed;
    FJD?: Aed;
    MYR?: Aed;
    TOP?: Aed;
    SRD?: Aed;
    BGN?: Aed;
    BRL?: Aed;
    IDR?: Aed;
    TVD?: Aed;
    BMD?: Aed;
    DKK?: Aed;
    FOK?: Aed;
    JPY?: Aed;
    ISK?: Aed;
    KGS?: Aed;
    SZL?: Aed;
    BIF?: Aed;
    TTD?: Aed;
    JOD?: Aed;
    MAD?: Aed;
    EGP?: Aed;
    COP?: Aed;
    ANG?: Aed;
    BZD?: Aed;
    MUR?: Aed;
    BTN?: Aed;
    INR?: Aed;
    DZD?: Aed;
    MRU?: Aed;
    DJF?: Aed;
    GNF?: Aed;
    GBP?: Aed;
    IMP?: Aed;
    UAH?: Aed;
    PLN?: Aed;
    PAB?: Aed;
    CLP?: Aed;
    BWP?: Aed;
    TMT?: Aed;
    MGA?: Aed;
    CDF?: Aed;
    VND?: Aed;
    TRY?: Aed;
    KZT?: Aed;
    RON?: Aed;
    TND?: Aed;
    HUF?: Aed;
    UZS?: Aed;
    RUB?: Aed;
    GHS?: Aed;
    AWG?: Aed;
    AOA?: Aed;
    CHF?: Aed;
    TWD?: Aed;
    MKD?: Aed;
    SLL?: Aed;
    CZK?: Aed;
    PEN?: Aed;
    BND?: Aed;
    SGD?: Aed;
    YER?: Aed;
    HRK?: Aed;
    LYD?: Aed;
    PYG?: Aed;
    LKR?: Aed;
    RSD?: Aed;
    GGP?: Aed;
    JEP?: Aed;
    KPW?: Aed;
    SOS?: Aed;
    SDG?: BAM;
    NGN?: Aed;
    ALL?: Aed;
    BOB?: Aed;
    PGK?: Aed;
    QAR?: Aed;
    BBD?: Aed;
    CRC?: Aed;
    SCR?: Aed;
    HKD?: Aed;
    AFN?: Aed;
    NIO?: Aed;
    AED?: Aed;
    IRR?: Aed;
    ARS?: Aed;
    MXN?: Aed;
    AZN?: Aed;
    HNL?: Aed;
    TZS?: Aed;
    IQD?: Aed;
    BHD?: Aed;
    KRW?: Aed;
    KYD?: Aed;
    LSL?: Aed;
    NPR?: Aed;
    OMR?: Aed;
    BAM?: BAM;
    STN?: Aed;
    BSD?: Aed;
    NAD?: Aed;
    VUV?: Aed;
    BDT?: Aed;
    GMD?: Aed;
    MOP?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    SSP?: Aed;
    MWK?: Aed;
    HTG?: Aed;
    SAR?: Aed;
    KWD?: Aed;
    THB?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
