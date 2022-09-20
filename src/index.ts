import {
	TimestampResolvable,
	TimestampStyle,
	TimeUnits,
	TimeUnitResolvable,
	TimestampResult,
	StyleType,
	StyleResolvable,
} from './types';

/**
 *  This is a {@link DiscordTimestamp}, a utility to convert a timestamp to a Discord Unix Timestamp.
 *
 * @example
 * ```typescript
 * const createdAt = new Date().getTime();
 *
 * const createdDate = new DiscordTimestamp(createdAt);
 *
 * console.log(createdDate.format()); // --> <t:xxxxxxx:f>
 * console.log(createdDate.setStyle('R').format()); // --> <t:xxxxxxx:R>
 * ```
 */
export class DiscordTimestamp {
	/**
	 * The style of the Discord Timestamp, for more information, visit {@linkplain https://discord.com/developers/docs/reference#message-formatting-timestamp-styles Message Formatting Timestamp Styles}
	 *
	 * @default ```f```
	 * @public
	 */
	public style: TimestampStyle;

	/**
	 * The current parsed timestamp.
	 *
	 * @default ```new Date().getTime()```
	 * @protected
	 */
	protected timestamp: number;

	/**
	 * The initial value of the timestamp
	 *
	 * @protected
	 */
	protected readonly initialTimestamp: number;

	/**
	 * Constructor of the {@link DiscordTimestamp} class.
	 *
	 * @param  {TimestampResolvable} timestamp? The {@link TimestampResolvable} to resolve, could be a number, date or string of numbers.
	 * @param  {StyleResolvable} style? The {@link StyleResolvable} for this instance of the {@link DiscordTimestamp} class.
	 */
	constructor(timestamp?: TimestampResolvable, style?: StyleResolvable) {
		this.timestamp = this.parseTimestamp(timestamp ?? new Date());
		this.initialTimestamp = this.timestamp;
		this.style = style ? this.resolveStyle(style) : StyleType.ShortDateAndTime;
	}

	/**
	 * Adds time to the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
	 *
	 * @param  {number} amount The amount of time to add.
	 * @param  {TimeUnitResolvable} time? The time unit of the {@link amount}.
	 * @returns The current instance of {@link DiscordTimestamp}
	 */
	public addTime(amount: number, time?: TimeUnitResolvable) {
		this.timestamp += this.resolveTime(amount, time);
		return this;
	}

	/**
	 * Subtracts time to the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
	 *
	 * @param  {number} amount The amount of time to subtract.
	 * @param  {TimeUnitResolvable} time? The time unit of the {@link amount}.
	 * @returns The current instance of {@link DiscordTimestamp}
	 */
	public subtractTime(amount: number, time?: TimeUnitResolvable) {
		this.timestamp -= this.resolveTime(amount, time);
		return this;
	}

	/**
	 * Resets the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
	 *
	 * @returns The current instance of {@link DiscordTimestamp}
	 */
	public resetTimestamp() {
		this.timestamp = this.initialTimestamp;
		return this;
	}

	/**
	 * Sets the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
	 *
	 * @param {TimestampResolvable} timestamp The {@link TimestampResolvable} to resolve, could be a number, date or string of numbers.
	 * @param {StyleResolvable} style? The new {@link StyleResolvable} value.
	 * @returns The current instance of {@link DiscordTimestamp}
	 */
	public setTimestamp(timestamp: TimestampResolvable, style?: StyleResolvable) {
		this.timestamp = this.parseTimestamp(timestamp);
		if (style) this.style = this.resolveStyle(style);
		return this;
	}

	/**
	 * Sets the {@link DiscordTimestamp.style} for this instance of {@link DiscordTimestamp}.
	 *
	 * @param {StyleResolvable} style The new {@link StyleResolvable} value.
	 * @returns The current instance of {@link DiscordTimestamp}
	 */
	public setStyle(style: StyleResolvable) {
		this.style = this.resolveStyle(style);
		return this;
	}

	/**
	 * Format a {@link TimestampResolvable} or the {@link DiscordTimestamp.timestamp} value to a {@link TimestampResult}.
	 *
	 * @param  {TimestampResolvable} timestamp? The {@link TimestampResolvable} to resolve, could be a number, date or string of numbers.
	 * @param  {StyleResolvable} style? The {@link StyleResolvable} for this {@link TimestampResolvable}.
	 * @returns An Discord Unix Timestamp, for more information, visit {@linkplain https://discord.com/developers/docs/reference#message-formatting-timestamp-styles Message Formatting Timestamp Styles}
	 */
	public format(style?: StyleResolvable) {
		return this.convertToDiscordTimestamp(this.timestamp, style ? this.resolveStyle(style) : this.style);
	}

	private parseTimestamp(timestamp: TimestampResolvable) {
		const resolved = this.resolveTimestamp(timestamp);
		if (isNaN(resolved)) throw new Error('Resolved timestamp is not a number (NaN).');
		if (resolved < 1000) throw new Error('Resolved timestamp must be greater than 1000');
		return resolved;
	}

	private resolveStyle(style: StyleResolvable) {
		return (StyleType[style as keyof typeof StyleType] as TimestampStyle) ?? (style as TimestampStyle);
	}

	private resolveTimestamp(timestamp: TimestampResolvable) {
		return timestamp instanceof Date ? timestamp.getTime() : typeof timestamp === 'number' ? timestamp : parseInt(timestamp);
	}

	private resolveTime(amount: number, time?: TimeUnitResolvable) {
		const multiple = typeof time === 'string' ? TimeUnits[time] : time ?? TimeUnits.Miliseconds;
		return amount * multiple;
	}

	private convertToDiscordTimestamp(timestamp: number, style: TimestampStyle): TimestampResult {
		return `<t:${Math.floor(timestamp / 1000)}:${style}>`;
	}
}

export { StyleType, TimeUnits };

export default DiscordTimestamp;
