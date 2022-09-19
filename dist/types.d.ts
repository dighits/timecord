export declare type TimestampResolvable = number | Date | string;
export declare type TimestampStyle = 't' | 'T' | 'd' | 'D' | 'f' | 'F' | 'R';
export declare type StyleResolvable = keyof typeof StyleType | StyleType;
export declare type TimestampResult = `<t:${number}:${StyleType[number]}>`;
export declare type TimeUnitResolvable = TimeUnits | keyof typeof TimeUnits;
export declare enum TimeUnits {
    Miliseconds = 1,
    Seconds = 1000,
    Minutes = 60000,
    Hours = 3600000,
    Days = 86400000
}
export declare enum StyleType {
    ShortTime = "t",
    LongTime = "T",
    ShortDate = "d",
    LongDate = "D",
    ShortDateAndTime = "f",
    LongDateAndTime = "F",
    RelativeTime = "R"
}
//# sourceMappingURL=types.d.ts.map