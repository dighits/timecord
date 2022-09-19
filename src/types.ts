export type TimestampResolvable = Date | number | string;
export type TimestampStyle = 't' | 'T' | 'd' | 'D' | 'f' | 'F' | 'R';
export type TimestampResult = `<t:${number}:${StyleType[number]}>`;
export type StyleResolvable = StyleType | keyof typeof StyleType;
export type TimeUnitResolvable = TimeUnits | keyof typeof TimeUnits;

export enum TimeUnits {
	Miliseconds = 1,
	Seconds = 1000,
	Minutes = 60000,
	Hours = 3.6e6,
	Days = 8.64e7,
}

export enum StyleType {
	ShortTime = 't',
	LongTime = 'T',
	ShortDate = 'd',
	LongDate = 'D',
	ShortDateAndTime = 'f',
	LongDateAndTime = 'F',
	RelativeTime = 'R',
}
