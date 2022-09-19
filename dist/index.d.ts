import { TimestampResolvable, TimestampStyle, TimeUnitResolvable, StyleResolvable } from './types';
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
export declare class DiscordTimestamp {
    /**
     * The style of the Discord Timestamp, for more information, visit {@linkplain https://discord.com/developers/docs/reference#message-formatting-timestamp-styles Message Formatting Timestamp Styles}
     *
     * @default ```f```
     * @public
     */
    style: TimestampStyle;
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
     * Constructor of the {@link DiscordTimestamp} class
     *
     * @param  {TimestampResolvable} timestamp? The {@link TimestampResolvable} to resolve, could be a number, date or string of numbers.
     * @param  {TimestampStyle} style? The {@link TimestampStyle} for this instance of the {@link DiscordTimestamp} class.
     */
    constructor(timestamp?: TimestampResolvable, style?: StyleResolvable);
    /**
     * Adds time to the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
     *
     * @param  {number} amount The amount of time to add.
     * @param  {TimeUnitResolvable} time? The time unit of the {@link amount}.
     * @returns The current instance of {@link DiscordTimestamp}
     */
    addTime(amount: number, time?: TimeUnitResolvable): this;
    /**
     * Subtracts time to the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
     *
     * @param  {number} amount The amount of time to subtract.
     * @param  {TimeUnitResolvable} time? The time unit of the {@link amount}.
     * @returns The current instance of {@link DiscordTimestamp}
     */
    subtractTime(amount: number, time?: TimeUnitResolvable): this;
    /**
     * Resets the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
     *
     * @returns The current instance of {@link DiscordTimestamp}
     */
    resetTimestamp(): this;
    /**
     * Sets the {@link DiscordTimestamp.timestamp} for this instance of {@link DiscordTimestamp}.
     *
     * @param  {TimestampResolvable} timestamp The {@link TimestampResolvable} to resolve, could be a number, date or string of numbers.
     * @returns The current instance of {@link DiscordTimestamp}
     */
    setTimestamp(timestamp: TimestampResolvable, style?: StyleResolvable): this;
    /**
     * Sets the {@link DiscordTimestamp.style} for this instance of {@link DiscordTimestamp}.
     *
     * @param {TimestampStyle} style The new {@link TimestampStyle} value.
     * @returns The current instance of {@link DiscordTimestamp}
     */
    setStyle(style: StyleResolvable): this;
    /**
     * Format a {@link TimestampResolvable} or the {@link DiscordTimestamp.timestamp} value to a {@link TimestampResult}.
     *
     * @param  {TimestampResolvable} timestamp? The {@link TimestampResolvable} to resolve, could be a number, date or string of numbers.
     * @param  {TimestampStyle} style? The {@link TimestampStyle} for this {@link TimestampResolvable}.
     * @returns An Discord Unix Timestamp, for more information, visit {@linkplain https://discord.com/developers/docs/reference#message-formatting-timestamp-styles Message Formatting Timestamp Styles}
     */
    format(timestamp?: TimestampResolvable, style?: StyleResolvable): `<t:${number}:${string}>`;
    private parseTimestamp;
    private resolveStyle;
    private resolveTimestamp;
    private resolveTime;
    private convertToDiscordTimestamp;
}
export default DiscordTimestamp;
//# sourceMappingURL=index.d.ts.map