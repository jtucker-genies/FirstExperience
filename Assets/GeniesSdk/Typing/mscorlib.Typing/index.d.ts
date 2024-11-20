
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as System_TimeZoneInfo from 'System.TimeZoneInfo'
    import * as System_Collections_ObjectModel from 'System.Collections.ObjectModel'
    import * as System_Globalization from 'System.Globalization'
    import * as System_Reflection from 'System.Reflection'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'
    import * as System_Threading from 'System.Threading'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'
    import * as System_Collections from 'System.Collections'
    import * as System_Buffers from 'System.Buffers'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'

    class TimeZoneInfo extends Object implements System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IEquatable$1<TimeZoneInfo> {

        public get Id(): string;
        public get DisplayName(): string;
        public get StandardName(): string;
        public get DaylightName(): string;
        public get BaseUtcOffset(): TimeSpan;
        public get SupportsDaylightSavingTime(): boolean;
        public static get Local(): TimeZoneInfo;
        public static get Utc(): TimeZoneInfo;

        public GetAdjustmentRules () : System_TimeZoneInfo.AdjustmentRule[]
        public static FindSystemTimeZoneById ($id: string) : TimeZoneInfo
        public GetAmbiguousTimeOffsets ($dateTimeOffset: DateTimeOffset) : TimeSpan[]
        public GetAmbiguousTimeOffsets ($dateTime: DateTime) : TimeSpan[]
        public GetUtcOffset ($dateTimeOffset: DateTimeOffset) : TimeSpan
        public GetUtcOffset ($dateTime: DateTime) : TimeSpan
        public IsAmbiguousTime ($dateTimeOffset: DateTimeOffset) : boolean
        public IsAmbiguousTime ($dateTime: DateTime) : boolean
        public IsDaylightSavingTime ($dateTimeOffset: DateTimeOffset) : boolean
        public IsDaylightSavingTime ($dateTime: DateTime) : boolean
        public IsInvalidTime ($dateTime: DateTime) : boolean
        public static ClearCachedData () : void
        public static ConvertTimeBySystemTimeZoneId ($dateTimeOffset: DateTimeOffset, $destinationTimeZoneId: string) : DateTimeOffset
        public static ConvertTimeBySystemTimeZoneId ($dateTime: DateTime, $destinationTimeZoneId: string) : DateTime
        public static ConvertTimeBySystemTimeZoneId ($dateTime: DateTime, $sourceTimeZoneId: string, $destinationTimeZoneId: string) : DateTime
        public static ConvertTime ($dateTimeOffset: DateTimeOffset, $destinationTimeZone: TimeZoneInfo) : DateTimeOffset
        public static ConvertTime ($dateTime: DateTime, $destinationTimeZone: TimeZoneInfo) : DateTime
        public static ConvertTime ($dateTime: DateTime, $sourceTimeZone: TimeZoneInfo, $destinationTimeZone: TimeZoneInfo) : DateTime
        public static ConvertTimeFromUtc ($dateTime: DateTime, $destinationTimeZone: TimeZoneInfo) : DateTime
        public static ConvertTimeToUtc ($dateTime: DateTime) : DateTime
        public static ConvertTimeToUtc ($dateTime: DateTime, $sourceTimeZone: TimeZoneInfo) : DateTime
        public Equals ($other: TimeZoneInfo) : boolean
        public Equals ($obj: any) : boolean
        public static FromSerializedString ($source: string) : TimeZoneInfo
        public GetHashCode () : int
        public static GetSystemTimeZones () : System_Collections_ObjectModel.ReadOnlyCollection$1<TimeZoneInfo>
        public HasSameRules ($other: TimeZoneInfo) : boolean
        public ToSerializedString () : string
        public ToString () : string
        public static CreateCustomTimeZone ($id: string, $baseUtcOffset: TimeSpan, $displayName: string, $standardDisplayName: string) : TimeZoneInfo
        public static CreateCustomTimeZone ($id: string, $baseUtcOffset: TimeSpan, $displayName: string, $standardDisplayName: string, $daylightDisplayName: string, $adjustmentRules: System_TimeZoneInfo.AdjustmentRule[]) : TimeZoneInfo
        public static CreateCustomTimeZone ($id: string, $baseUtcOffset: TimeSpan, $displayName: string, $standardDisplayName: string, $daylightDisplayName: string, $adjustmentRules: System_TimeZoneInfo.AdjustmentRule[], $disableDaylightSavingTime: boolean) : TimeZoneInfo
    }

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    class DateTime extends ValueType implements IFormattable, ISpanFormattable, IComparable, IComparable$1<DateTime>, IConvertible, System_Runtime_Serialization.ISerializable, IEquatable$1<DateTime> {

        public static MinValue : DateTime
        public static MaxValue : DateTime
        public static UnixEpoch : DateTime
        public get Date(): DateTime;
        public get Day(): int;
        public get DayOfWeek(): DayOfWeek;
        public get DayOfYear(): int;
        public get Hour(): int;
        public get Kind(): DateTimeKind;
        public get Millisecond(): int;
        public get Minute(): int;
        public get Month(): int;
        public static get Now(): DateTime;
        public get Second(): int;
        public get Ticks(): bigint;
        public get TimeOfDay(): TimeSpan;
        public static get Today(): DateTime;
        public get Year(): int;
        public static get UtcNow(): DateTime;

        public constructor ($ticks: bigint)
        public constructor ($ticks: bigint, $kind: DateTimeKind)
        public constructor ($year: int, $month: int, $day: int)
        public constructor ($year: int, $month: int, $day: int, $calendar: System_Globalization.Calendar)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $kind: DateTimeKind)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $calendar: System_Globalization.Calendar)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $millisecond: int)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $millisecond: int, $kind: DateTimeKind)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $millisecond: int, $calendar: System_Globalization.Calendar)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $millisecond: int, $calendar: System_Globalization.Calendar, $kind: DateTimeKind)
        public Add ($value: TimeSpan) : DateTime
        public AddDays ($value: double) : DateTime
        public AddHours ($value: double) : DateTime
        public AddMilliseconds ($value: double) : DateTime
        public AddMinutes ($value: double) : DateTime
        public AddMonths ($months: int) : DateTime
        public AddSeconds ($value: double) : DateTime
        public AddTicks ($value: bigint) : DateTime
        public AddYears ($value: int) : DateTime
        public static Compare ($t1: DateTime, $t2: DateTime) : int
        public CompareTo ($value: any) : int
        public CompareTo ($value: DateTime) : int
        public static DaysInMonth ($year: int, $month: int) : int
        public Equals ($value: any) : boolean
        public Equals ($value: DateTime) : boolean
        public static Equals ($t1: DateTime, $t2: DateTime) : boolean
        public static FromBinary ($dateData: bigint) : DateTime
        public static FromFileTime ($fileTime: bigint) : DateTime
        public static FromFileTimeUtc ($fileTime: bigint) : DateTime
        public static FromOADate ($d: double) : DateTime
        public IsDaylightSavingTime () : boolean
        public static SpecifyKind ($value: DateTime, $kind: DateTimeKind) : DateTime
        public ToBinary () : bigint
        public GetHashCode () : int
        public static IsLeapYear ($year: int) : boolean
        public static Parse ($s: string) : DateTime
        public static Parse ($s: string, $provider: IFormatProvider) : DateTime
        public static Parse ($s: string, $provider: IFormatProvider, $styles: System_Globalization.DateTimeStyles) : DateTime
        public static ParseExact ($s: string, $format: string, $provider: IFormatProvider) : DateTime
        public static ParseExact ($s: string, $format: string, $provider: IFormatProvider, $style: System_Globalization.DateTimeStyles) : DateTime
        public static ParseExact ($s: string, $formats: string[], $provider: IFormatProvider, $style: System_Globalization.DateTimeStyles) : DateTime
        public Subtract ($value: DateTime) : TimeSpan
        public Subtract ($value: TimeSpan) : DateTime
        public ToOADate () : double
        public ToFileTime () : bigint
        public ToFileTimeUtc () : bigint
        public ToLocalTime () : DateTime
        public ToLongDateString () : string
        public ToLongTimeString () : string
        public ToShortDateString () : string
        public ToShortTimeString () : string
        public ToString () : string
        public ToString ($format: string) : string
        public ToString ($provider: IFormatProvider) : string
        public ToString ($format: string, $provider: IFormatProvider) : string
        public ToUniversalTime () : DateTime
        public static TryParse ($s: string, $result: $Ref<DateTime>) : boolean
        public static TryParse ($s: string, $provider: IFormatProvider, $styles: System_Globalization.DateTimeStyles, $result: $Ref<DateTime>) : boolean
        public static TryParseExact ($s: string, $format: string, $provider: IFormatProvider, $style: System_Globalization.DateTimeStyles, $result: $Ref<DateTime>) : boolean
        public static TryParseExact ($s: string, $formats: string[], $provider: IFormatProvider, $style: System_Globalization.DateTimeStyles, $result: $Ref<DateTime>) : boolean
        public GetDateTimeFormats () : string[]
        public GetDateTimeFormats ($provider: IFormatProvider) : string[]
        public GetDateTimeFormats ($format: number) : string[]
        public GetDateTimeFormats ($format: number, $provider: IFormatProvider) : string[]
        public GetTypeCode () : TypeCode
        public static op_Addition ($d: DateTime, $t: TimeSpan) : DateTime
        public static op_Subtraction ($d: DateTime, $t: TimeSpan) : DateTime
        public static op_Subtraction ($d1: DateTime, $d2: DateTime) : TimeSpan
        public static op_Equality ($d1: DateTime, $d2: DateTime) : boolean
        public static op_Inequality ($d1: DateTime, $d2: DateTime) : boolean
        public static op_LessThan ($t1: DateTime, $t2: DateTime) : boolean
        public static op_LessThanOrEqual ($t1: DateTime, $t2: DateTime) : boolean
        public static op_GreaterThan ($t1: DateTime, $t2: DateTime) : boolean
        public static op_GreaterThanOrEqual ($t1: DateTime, $t2: DateTime) : boolean
    }

    interface IFormattable {

        ToString? ($format: string, $formatProvider: IFormatProvider) : string
    }

    interface IFormatProvider {

        GetFormat? ($formatType: Type) : any
    }

    interface Type extends System_Reflection.IReflect, System_Runtime_InteropServices._Type {

    }

    interface IComparable {

        CompareTo? ($obj: any) : int
    }

    interface IComparable$1<T> {

        CompareTo? ($other: T) : int
    }

    interface IConvertible {

        GetTypeCode? () : TypeCode
        ToBoolean? ($provider: IFormatProvider) : boolean
        ToChar? ($provider: IFormatProvider) : number
        ToSByte? ($provider: IFormatProvider) : sbyte
        ToByte? ($provider: IFormatProvider) : byte
        ToInt16? ($provider: IFormatProvider) : short
        ToUInt16? ($provider: IFormatProvider) : ushort
        ToInt32? ($provider: IFormatProvider) : int
        ToUInt32? ($provider: IFormatProvider) : uint
        ToInt64? ($provider: IFormatProvider) : bigint
        ToUInt64? ($provider: IFormatProvider) : bigint
        ToSingle? ($provider: IFormatProvider) : float
        ToDouble? ($provider: IFormatProvider) : double
        ToDecimal? ($provider: IFormatProvider) : Decimal
        ToDateTime? ($provider: IFormatProvider) : DateTime
        ToString? ($provider: IFormatProvider) : string
        ToType? ($conversionType: Type, $provider: IFormatProvider) : any
    }

    enum TypeCode {
        Empty = 0,
        Object = 1,
        DBNull = 2,
        Boolean = 3,
        Char = 4,
        SByte = 5,
        Byte = 6,
        Int16 = 7,
        UInt16 = 8,
        Int32 = 9,
        UInt32 = 10,
        Int64 = 11,
        UInt64 = 12,
        Single = 13,
        Double = 14,
        Decimal = 15,
        DateTime = 16,
        String = 18 
    }

    class Enum extends ValueType implements IFormattable, IComparable, IConvertible {

        public static TryParse<TEnum> ($value: string, $result: $Ref<TEnum>) : boolean
        public static TryParse<TEnum> ($value: string, $ignoreCase: boolean, $result: $Ref<TEnum>) : boolean
        public static Parse ($enumType: Type, $value: string) : any
        public static Parse ($enumType: Type, $value: string, $ignoreCase: boolean) : any
        public static GetUnderlyingType ($enumType: Type) : Type
        public static GetValues ($enumType: Type) : Array
        public static GetName ($enumType: Type, $value: any) : string
        public static GetNames ($enumType: Type) : string[]
        public static ToObject ($enumType: Type, $value: any) : any
        public static IsDefined ($enumType: Type, $value: any) : boolean
        public static Format ($enumType: Type, $value: any, $format: string) : string
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
        public CompareTo ($target: any) : int
        public ToString ($format: string) : string
        public HasFlag ($flag: Enum) : boolean
        public GetTypeCode () : TypeCode
        /**
        * @methodSwap ToObject_EBB7509C_H6065D4E7
        */
        public static ToObject ($enumType: Type, $value: short) : any
        /**
        * @methodSwap ToObject_EBB7509C_CC6AFC19
        */
        public static ToObject ($enumType: Type, $value: int) : any
        /**
        * @methodSwap ToObject_EBB7509C_D7940445
        */
        public static ToObject ($enumType: Type, $value: byte) : any
        public static ToObject ($enumType: Type, $value: bigint) : any
        public static Parse<TEnum> ($value: string) : TEnum
        public static Parse<TEnum> ($value: string, $ignoreCase: boolean) : TEnum
        public static TryParse ($enumType: Type, $value: string, $ignoreCase: boolean, $result: $Ref<any>) : boolean
        public static TryParse ($enumType: Type, $value: string, $result: $Ref<any>) : boolean
    }

    class Char extends ValueType implements IComparable, IComparable$1<number>, IConvertible, IEquatable$1<number> {

        public static MaxValue : number
        public static MinValue : number

        public GetHashCode () : int
        public Equals ($obj: any) : boolean
        public Equals ($obj: number) : boolean
        public CompareTo ($value: any) : int
        public CompareTo ($value: number) : int
        public ToString () : string
        public ToString ($provider: IFormatProvider) : string
        public static ToString ($c: number) : string
        public static Parse ($s: string) : number
        public static TryParse ($s: string, $result: $Ref<number>) : boolean
        public static IsDigit ($c: number) : boolean
        public static IsLetter ($c: number) : boolean
        public static IsWhiteSpace ($c: number) : boolean
        public static IsUpper ($c: number) : boolean
        public static IsLower ($c: number) : boolean
        public static IsPunctuation ($c: number) : boolean
        public static IsLetterOrDigit ($c: number) : boolean
        public static ToUpper ($c: number, $culture: System_Globalization.CultureInfo) : number
        public static ToUpper ($c: number) : number
        public static ToUpperInvariant ($c: number) : number
        public static ToLower ($c: number, $culture: System_Globalization.CultureInfo) : number
        public static ToLower ($c: number) : number
        public static ToLowerInvariant ($c: number) : number
        public GetTypeCode () : TypeCode
        public static IsControl ($c: number) : boolean
        /**
        * @methodSwap IsControl_EBB7509C_H72D17FE0
        */
        public static IsControl ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsDigit_EBB7509C_H72D17FE0
        */
        public static IsDigit ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsLetter_EBB7509C_H72D17FE0
        */
        public static IsLetter ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsLetterOrDigit_EBB7509C_H72D17FE0
        */
        public static IsLetterOrDigit ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsLower_EBB7509C_H72D17FE0
        */
        public static IsLower ($s: string, $index: int) : boolean
        public static IsNumber ($c: number) : boolean
        /**
        * @methodSwap IsNumber_EBB7509C_H72D17FE0
        */
        public static IsNumber ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsPunctuation_EBB7509C_H72D17FE0
        */
        public static IsPunctuation ($s: string, $index: int) : boolean
        public static IsSeparator ($c: number) : boolean
        /**
        * @methodSwap IsSeparator_EBB7509C_H72D17FE0
        */
        public static IsSeparator ($s: string, $index: int) : boolean
        public static IsSurrogate ($c: number) : boolean
        /**
        * @methodSwap IsSurrogate_EBB7509C_H72D17FE0
        */
        public static IsSurrogate ($s: string, $index: int) : boolean
        public static IsSymbol ($c: number) : boolean
        /**
        * @methodSwap IsSymbol_EBB7509C_H72D17FE0
        */
        public static IsSymbol ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsUpper_EBB7509C_H72D17FE0
        */
        public static IsUpper ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsWhiteSpace_EBB7509C_H72D17FE0
        */
        public static IsWhiteSpace ($s: string, $index: int) : boolean
        public static GetUnicodeCategory ($c: number) : System_Globalization.UnicodeCategory
        /**
        * @methodSwap GetUnicodeCategory_EBB7509C_H72D17FE0
        */
        public static GetUnicodeCategory ($s: string, $index: int) : System_Globalization.UnicodeCategory
        public static GetNumericValue ($c: number) : double
        /**
        * @methodSwap GetNumericValue_EBB7509C_H72D17FE0
        */
        public static GetNumericValue ($s: string, $index: int) : double
        public static IsHighSurrogate ($c: number) : boolean
        /**
        * @methodSwap IsHighSurrogate_EBB7509C_H72D17FE0
        */
        public static IsHighSurrogate ($s: string, $index: int) : boolean
        public static IsLowSurrogate ($c: number) : boolean
        /**
        * @methodSwap IsLowSurrogate_EBB7509C_H72D17FE0
        */
        public static IsLowSurrogate ($s: string, $index: int) : boolean
        /**
        * @methodSwap IsSurrogatePair_EBB7509C_H72D17FE0
        */
        public static IsSurrogatePair ($s: string, $index: int) : boolean
        public static IsSurrogatePair ($highSurrogate: number, $lowSurrogate: number) : boolean
        public static ConvertFromUtf32 ($utf32: int) : string
        public static ConvertToUtf32 ($highSurrogate: number, $lowSurrogate: number) : int
        /**
        * @methodSwap ConvertToUtf32_EBB7509C_H72D17FE0
        */
        public static ConvertToUtf32 ($s: string, $index: int) : int
    }

    interface ICloneable {

        Clone? () : any
    }

    interface Decimal extends IFormattable, ISpanFormattable, IComparable, System_Runtime_Serialization.IDeserializationCallback, IComparable$1<Decimal>, IConvertible, IEquatable$1<Decimal> {

    }

    class TimeSpan extends ValueType implements IFormattable, ISpanFormattable, IComparable, IComparable$1<TimeSpan>, IEquatable$1<TimeSpan> {

        public static TicksPerMillisecond : bigint
        public static TicksPerSecond : bigint
        public static TicksPerMinute : bigint
        public static TicksPerHour : bigint
        public static TicksPerDay : bigint
        public static Zero : TimeSpan
        public static MaxValue : TimeSpan
        public static MinValue : TimeSpan
        public get Ticks(): bigint;
        public get Days(): int;
        public get Hours(): int;
        public get Milliseconds(): int;
        public get Minutes(): int;
        public get Seconds(): int;
        public get TotalDays(): double;
        public get TotalHours(): double;
        public get TotalMilliseconds(): double;
        public get TotalMinutes(): double;
        public get TotalSeconds(): double;

        public constructor ($ticks: bigint)
        public constructor ($hours: int, $minutes: int, $seconds: int)
        public constructor ($days: int, $hours: int, $minutes: int, $seconds: int)
        public constructor ($days: int, $hours: int, $minutes: int, $seconds: int, $milliseconds: int)
        public Add ($ts: TimeSpan) : TimeSpan
        public static Compare ($t1: TimeSpan, $t2: TimeSpan) : int
        public CompareTo ($value: any) : int
        public CompareTo ($value: TimeSpan) : int
        public static FromDays ($value: double) : TimeSpan
        public Duration () : TimeSpan
        public Equals ($value: any) : boolean
        public Equals ($obj: TimeSpan) : boolean
        public static Equals ($t1: TimeSpan, $t2: TimeSpan) : boolean
        public GetHashCode () : int
        public static FromHours ($value: double) : TimeSpan
        public static FromMilliseconds ($value: double) : TimeSpan
        public static FromMinutes ($value: double) : TimeSpan
        public Negate () : TimeSpan
        public static FromSeconds ($value: double) : TimeSpan
        public Subtract ($ts: TimeSpan) : TimeSpan
        public Multiply ($factor: double) : TimeSpan
        /**
        * @methodSwap Divide_EBB7509C_H328EE55B
        */
        public Divide ($divisor: double) : TimeSpan
        public Divide ($ts: TimeSpan) : double
        public static FromTicks ($value: bigint) : TimeSpan
        public static Parse ($s: string) : TimeSpan
        public static Parse ($input: string, $formatProvider: IFormatProvider) : TimeSpan
        public static ParseExact ($input: string, $format: string, $formatProvider: IFormatProvider) : TimeSpan
        public static ParseExact ($input: string, $formats: string[], $formatProvider: IFormatProvider) : TimeSpan
        public static ParseExact ($input: string, $format: string, $formatProvider: IFormatProvider, $styles: System_Globalization.TimeSpanStyles) : TimeSpan
        public static ParseExact ($input: string, $formats: string[], $formatProvider: IFormatProvider, $styles: System_Globalization.TimeSpanStyles) : TimeSpan
        public static TryParse ($s: string, $result: $Ref<TimeSpan>) : boolean
        public static TryParse ($input: string, $formatProvider: IFormatProvider, $result: $Ref<TimeSpan>) : boolean
        public static TryParseExact ($input: string, $format: string, $formatProvider: IFormatProvider, $result: $Ref<TimeSpan>) : boolean
        public static TryParseExact ($input: string, $formats: string[], $formatProvider: IFormatProvider, $result: $Ref<TimeSpan>) : boolean
        public static TryParseExact ($input: string, $format: string, $formatProvider: IFormatProvider, $styles: System_Globalization.TimeSpanStyles, $result: $Ref<TimeSpan>) : boolean
        public static TryParseExact ($input: string, $formats: string[], $formatProvider: IFormatProvider, $styles: System_Globalization.TimeSpanStyles, $result: $Ref<TimeSpan>) : boolean
        public ToString () : string
        public ToString ($format: string) : string
        public ToString ($format: string, $formatProvider: IFormatProvider) : string
        public static op_UnaryNegation ($t: TimeSpan) : TimeSpan
        public static op_Subtraction ($t1: TimeSpan, $t2: TimeSpan) : TimeSpan
        public static op_UnaryPlus ($t: TimeSpan) : TimeSpan
        public static op_Addition ($t1: TimeSpan, $t2: TimeSpan) : TimeSpan
        /**
        * @methodSwap op_Multiply_EBB7509C_H6B52574D
        */
        public static op_Multiply ($timeSpan: TimeSpan, $factor: double) : TimeSpan
        /**
        * @methodSwap op_Multiply_EBB7509C_H24F7544D
        */
        public static op_Multiply ($factor: double, $timeSpan: TimeSpan) : TimeSpan
        /**
        * @methodSwap op_Division_EBB7509C_H6B52574D
        */
        public static op_Division ($timeSpan: TimeSpan, $divisor: double) : TimeSpan
        public static op_Division ($t1: TimeSpan, $t2: TimeSpan) : double
        public static op_Equality ($t1: TimeSpan, $t2: TimeSpan) : boolean
        public static op_Inequality ($t1: TimeSpan, $t2: TimeSpan) : boolean
        public static op_LessThan ($t1: TimeSpan, $t2: TimeSpan) : boolean
        public static op_LessThanOrEqual ($t1: TimeSpan, $t2: TimeSpan) : boolean
        public static op_GreaterThan ($t1: TimeSpan, $t2: TimeSpan) : boolean
        public static op_GreaterThanOrEqual ($t1: TimeSpan, $t2: TimeSpan) : boolean
    }

    enum DateTimeKind {
        Unspecified = 0,
        Utc = 1,
        Local = 2 
    }

    enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6 
    }

    class DateTimeOffset extends ValueType implements IFormattable, ISpanFormattable, IComparable, System_Runtime_Serialization.IDeserializationCallback, IComparable$1<DateTimeOffset>, System_Runtime_Serialization.ISerializable, IEquatable$1<DateTimeOffset> {

        public static MinValue : DateTimeOffset
        public static MaxValue : DateTimeOffset
        public static UnixEpoch : DateTimeOffset
        public static get Now(): DateTimeOffset;
        public static get UtcNow(): DateTimeOffset;
        public get DateTime(): DateTime;
        public get UtcDateTime(): DateTime;
        public get LocalDateTime(): DateTime;
        public get Date(): DateTime;
        public get Day(): int;
        public get DayOfWeek(): DayOfWeek;
        public get DayOfYear(): int;
        public get Hour(): int;
        public get Millisecond(): int;
        public get Minute(): int;
        public get Month(): int;
        public get Offset(): TimeSpan;
        public get Second(): int;
        public get Ticks(): bigint;
        public get UtcTicks(): bigint;
        public get TimeOfDay(): TimeSpan;
        public get Year(): int;

        public constructor ($ticks: bigint, $offset: TimeSpan)
        public constructor ($dateTime: DateTime)
        public constructor ($dateTime: DateTime, $offset: TimeSpan)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $offset: TimeSpan)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $millisecond: int, $offset: TimeSpan)
        public constructor ($year: int, $month: int, $day: int, $hour: int, $minute: int, $second: int, $millisecond: int, $calendar: System_Globalization.Calendar, $offset: TimeSpan)
        public ToOffset ($offset: TimeSpan) : DateTimeOffset
        public Add ($timeSpan: TimeSpan) : DateTimeOffset
        public AddDays ($days: double) : DateTimeOffset
        public AddHours ($hours: double) : DateTimeOffset
        public AddMilliseconds ($milliseconds: double) : DateTimeOffset
        public AddMinutes ($minutes: double) : DateTimeOffset
        public AddMonths ($months: int) : DateTimeOffset
        public AddSeconds ($seconds: double) : DateTimeOffset
        public AddTicks ($ticks: bigint) : DateTimeOffset
        public AddYears ($years: int) : DateTimeOffset
        public static Compare ($first: DateTimeOffset, $second: DateTimeOffset) : int
        public CompareTo ($other: DateTimeOffset) : int
        public Equals ($obj: any) : boolean
        public Equals ($other: DateTimeOffset) : boolean
        public EqualsExact ($other: DateTimeOffset) : boolean
        public static Equals ($first: DateTimeOffset, $second: DateTimeOffset) : boolean
        public static FromFileTime ($fileTime: bigint) : DateTimeOffset
        public static FromUnixTimeSeconds ($seconds: bigint) : DateTimeOffset
        public static FromUnixTimeMilliseconds ($milliseconds: bigint) : DateTimeOffset
        public GetHashCode () : int
        public static Parse ($input: string) : DateTimeOffset
        public static Parse ($input: string, $formatProvider: IFormatProvider) : DateTimeOffset
        public static Parse ($input: string, $formatProvider: IFormatProvider, $styles: System_Globalization.DateTimeStyles) : DateTimeOffset
        public static ParseExact ($input: string, $format: string, $formatProvider: IFormatProvider) : DateTimeOffset
        public static ParseExact ($input: string, $format: string, $formatProvider: IFormatProvider, $styles: System_Globalization.DateTimeStyles) : DateTimeOffset
        public static ParseExact ($input: string, $formats: string[], $formatProvider: IFormatProvider, $styles: System_Globalization.DateTimeStyles) : DateTimeOffset
        public Subtract ($value: DateTimeOffset) : TimeSpan
        public Subtract ($value: TimeSpan) : DateTimeOffset
        public ToFileTime () : bigint
        public ToUnixTimeSeconds () : bigint
        public ToUnixTimeMilliseconds () : bigint
        public ToLocalTime () : DateTimeOffset
        public ToString () : string
        public ToString ($format: string) : string
        public ToString ($formatProvider: IFormatProvider) : string
        public ToString ($format: string, $formatProvider: IFormatProvider) : string
        public ToUniversalTime () : DateTimeOffset
        public static TryParse ($input: string, $result: $Ref<DateTimeOffset>) : boolean
        public static TryParse ($input: string, $formatProvider: IFormatProvider, $styles: System_Globalization.DateTimeStyles, $result: $Ref<DateTimeOffset>) : boolean
        public static TryParseExact ($input: string, $format: string, $formatProvider: IFormatProvider, $styles: System_Globalization.DateTimeStyles, $result: $Ref<DateTimeOffset>) : boolean
        public static TryParseExact ($input: string, $formats: string[], $formatProvider: IFormatProvider, $styles: System_Globalization.DateTimeStyles, $result: $Ref<DateTimeOffset>) : boolean
        public static op_Implicit ($dateTime: DateTime) : DateTimeOffset
        public static op_Addition ($dateTimeOffset: DateTimeOffset, $timeSpan: TimeSpan) : DateTimeOffset
        public static op_Subtraction ($dateTimeOffset: DateTimeOffset, $timeSpan: TimeSpan) : DateTimeOffset
        public static op_Subtraction ($left: DateTimeOffset, $right: DateTimeOffset) : TimeSpan
        public static op_Equality ($left: DateTimeOffset, $right: DateTimeOffset) : boolean
        public static op_Inequality ($left: DateTimeOffset, $right: DateTimeOffset) : boolean
        public static op_LessThan ($left: DateTimeOffset, $right: DateTimeOffset) : boolean
        public static op_LessThanOrEqual ($left: DateTimeOffset, $right: DateTimeOffset) : boolean
        public static op_GreaterThan ($left: DateTimeOffset, $right: DateTimeOffset) : boolean
        public static op_GreaterThanOrEqual ($left: DateTimeOffset, $right: DateTimeOffset) : boolean
    }

    interface IDisposable {

        Dispose? () : void
    }

    interface Action {
        () : void; 
        Invoke?: () => void;
    }
    var Action: { new (func: () => void): Action; }

    interface MulticastDelegate {
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
    }
    var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }

    class Delegate extends Object implements ICloneable, System_Runtime_Serialization.ISerializable {

        public get Method(): System_Reflection.MethodInfo;
        public get Target(): any;

        public static CreateDelegate ($type: Type, $firstArgument: any, $method: System_Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
        public static CreateDelegate ($type: Type, $firstArgument: any, $method: System_Reflection.MethodInfo) : Function
        public static CreateDelegate ($type: Type, $method: System_Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
        public static CreateDelegate ($type: Type, $method: System_Reflection.MethodInfo) : Function
        public static CreateDelegate ($type: Type, $target: any, $method: string) : Function
        public static CreateDelegate ($type: Type, $target: Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
        public static CreateDelegate ($type: Type, $target: Type, $method: string) : Function
        public static CreateDelegate ($type: Type, $target: Type, $method: string, $ignoreCase: boolean) : Function
        public static CreateDelegate ($type: Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
        public static CreateDelegate ($type: Type, $target: any, $method: string, $ignoreCase: boolean) : Function
        public DynamicInvoke (...args: any[]) : any
        public Clone () : any
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public GetObjectData ($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext) : void
        public GetInvocationList () : Function[]
        public static Combine ($a: Function, $b: Function) : Function
        public static Combine (...delegates: Function[]) : Function
        public static Remove ($source: Function, $value: Function) : Function
        public static RemoveAll ($source: Function, $value: Function) : Function
        public static op_Equality ($d1: Function, $d2: Function) : boolean
        public static op_Inequality ($d1: Function, $d2: Function) : boolean
    }

    interface IAsyncResult {

        readonly IsCompleted? : boolean
        readonly AsyncWaitHandle? : System_Threading.WaitHandle
        readonly AsyncState? : any
        readonly CompletedSynchronously? : boolean

    }

    interface MarshalByRefObject {

    }

    interface AsyncCallback {
        (ar: IAsyncResult) : void; 
        Invoke?: (ar: IAsyncResult) => void;
    }
    var AsyncCallback: { new (func: (ar: IAsyncResult) => void): AsyncCallback; }

    interface IntPtr extends System_Runtime_Serialization.ISerializable, IEquatable$1<IntPtr> {

    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
    }

    interface Action$2<T1,T2> {
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
    }

    interface Action$3<T1,T2,T3> {
        (arg1: T1, arg2: T2, arg3: T3) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => void;
    }

    interface Action$4<T1,T2,T3,T4> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void;
    }

    interface Action$5<T1,T2,T3,T4,T5> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void;
    }

    interface Action$6<T1,T2,T3,T4,T5,T6> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void;
    }

    interface Action$7<T1,T2,T3,T4,T5,T6,T7> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void;
    }

    interface Action$8<T1,T2,T3,T4,T5,T6,T7,T8> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : void; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void;
    }

    interface Func$1<TResult> {
        () : TResult; 
        Invoke?: () => TResult;
    }

    interface Func$2<T,TResult> {
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
    }

    interface Func$3<T1,T2,TResult> {
        (arg1: T1, arg2: T2) : TResult; 
        Invoke?: (arg1: T1, arg2: T2) => TResult;
    }

    interface Func$4<T1,T2,T3,TResult> {
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
    }

    interface Func$5<T1,T2,T3,T4,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult;
    }

    interface Func$6<T1,T2,T3,T4,T5,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult;
    }

    interface Func$7<T1,T2,T3,T4,T5,T6,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult;
    }

    interface Func$8<T1,T2,T3,T4,T5,T6,T7,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => TResult;
    }

    interface Func$9<T1,T2,T3,T4,T5,T6,T7,T8,TResult> {
        (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => TResult;
    }

    interface Predicate$1<T> {
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
    }

    class BitConverter {

        public static IsLittleEndian : boolean

        public static GetBytes ($value: boolean) : byte[]
        public static GetBytes ($value: number) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H6532296C
        */
        public static GetBytes ($value: short) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_F92D023A
        */
        public static GetBytes ($value: int) : byte[]
        public static GetBytes ($value: bigint) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H82424F3E
        */
        public static GetBytes ($value: float) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H328EE55B
        */
        public static GetBytes ($value: double) : byte[]
        public static ToChar ($value: byte[], $startIndex: int) : number
        public static ToInt16 ($value: byte[], $startIndex: int) : short
        public static ToInt32 ($value: byte[], $startIndex: int) : int
        public static ToInt64 ($value: byte[], $startIndex: int) : bigint
        public static ToSingle ($value: byte[], $startIndex: int) : float
        public static ToDouble ($value: byte[], $startIndex: int) : double
        /**
        * @methodSwap ToString_EBB7509C_EAE74B1C
        */
        public static ToString ($value: byte[], $startIndex: int, $length: int) : string
        public static ToString ($value: byte[]) : string
        /**
        * @methodSwap ToString_EBB7509C_H6AA803B
        */
        public static ToString ($value: byte[], $startIndex: int) : string
        public static ToBoolean ($value: byte[], $startIndex: int) : boolean
        public static DoubleToInt64Bits ($value: double) : bigint
        public static Int64BitsToDouble ($value: bigint) : double
        public static SingleToInt32Bits ($value: float) : int
        public static Int32BitsToSingle ($value: int) : float
    }

    class CharEnumerator extends Object implements ICloneable, System_Collections_Generic.IEnumerator$1<number> {

        public get Current(): number;

        public Clone () : any
        public MoveNext () : boolean
        public Dispose () : void
        public Reset () : void
    }

    class Convert {

        public static DBNull : any

        public static GetTypeCode ($value: any) : TypeCode
        public static IsDBNull ($value: any) : boolean
        public static ChangeType ($value: any, $typeCode: TypeCode) : any
        public static ChangeType ($value: any, $typeCode: TypeCode, $provider: IFormatProvider) : any
        public static ChangeType ($value: any, $conversionType: Type) : any
        public static ChangeType ($value: any, $conversionType: Type, $provider: IFormatProvider) : any
        public static ToBoolean ($value: any) : boolean
        public static ToBoolean ($value: any, $provider: IFormatProvider) : boolean
        public static ToBoolean ($value: boolean) : boolean
        public static ToBoolean ($value: number) : boolean
        /**
        * @methodSwap ToBoolean_EBB7509C_B79438BC
        */
        public static ToBoolean ($value: byte) : boolean
        /**
        * @methodSwap ToBoolean_EBB7509C_H6532296C
        */
        public static ToBoolean ($value: short) : boolean
        /**
        * @methodSwap ToBoolean_EBB7509C_F92D023A
        */
        public static ToBoolean ($value: int) : boolean
        public static ToBoolean ($value: bigint) : boolean
        public static ToBoolean ($value: string) : boolean
        public static ToBoolean ($value: string, $provider: IFormatProvider) : boolean
        /**
        * @methodSwap ToBoolean_EBB7509C_H82424F3E
        */
        public static ToBoolean ($value: float) : boolean
        /**
        * @methodSwap ToBoolean_EBB7509C_H328EE55B
        */
        public static ToBoolean ($value: double) : boolean
        public static ToBoolean ($value: Decimal) : boolean
        public static ToBoolean ($value: DateTime) : boolean
        public static ToChar ($value: any) : number
        public static ToChar ($value: any, $provider: IFormatProvider) : number
        public static ToChar ($value: boolean) : number
        public static ToChar ($value: number) : number
        /**
        * @methodSwap ToChar_EBB7509C_B79438BC
        */
        public static ToChar ($value: byte) : number
        /**
        * @methodSwap ToChar_EBB7509C_H6532296C
        */
        public static ToChar ($value: short) : number
        /**
        * @methodSwap ToChar_EBB7509C_F92D023A
        */
        public static ToChar ($value: int) : number
        public static ToChar ($value: bigint) : number
        public static ToChar ($value: string) : number
        public static ToChar ($value: string, $provider: IFormatProvider) : number
        /**
        * @methodSwap ToChar_EBB7509C_H82424F3E
        */
        public static ToChar ($value: float) : number
        /**
        * @methodSwap ToChar_EBB7509C_H328EE55B
        */
        public static ToChar ($value: double) : number
        public static ToChar ($value: Decimal) : number
        public static ToChar ($value: DateTime) : number
        public static ToByte ($value: any) : byte
        public static ToByte ($value: any, $provider: IFormatProvider) : byte
        public static ToByte ($value: boolean) : byte
        /**
        * @methodSwap ToByte_EBB7509C_B79438BC
        */
        public static ToByte ($value: byte) : byte
        public static ToByte ($value: number) : byte
        /**
        * @methodSwap ToByte_EBB7509C_H6532296C
        */
        public static ToByte ($value: short) : byte
        /**
        * @methodSwap ToByte_EBB7509C_F92D023A
        */
        public static ToByte ($value: int) : byte
        public static ToByte ($value: bigint) : byte
        /**
        * @methodSwap ToByte_EBB7509C_H82424F3E
        */
        public static ToByte ($value: float) : byte
        /**
        * @methodSwap ToByte_EBB7509C_H328EE55B
        */
        public static ToByte ($value: double) : byte
        public static ToByte ($value: Decimal) : byte
        public static ToByte ($value: string) : byte
        public static ToByte ($value: string, $provider: IFormatProvider) : byte
        public static ToByte ($value: DateTime) : byte
        public static ToInt16 ($value: any) : short
        public static ToInt16 ($value: any, $provider: IFormatProvider) : short
        public static ToInt16 ($value: boolean) : short
        public static ToInt16 ($value: number) : short
        /**
        * @methodSwap ToInt16_EBB7509C_B79438BC
        */
        public static ToInt16 ($value: byte) : short
        /**
        * @methodSwap ToInt16_EBB7509C_F92D023A
        */
        public static ToInt16 ($value: int) : short
        /**
        * @methodSwap ToInt16_EBB7509C_H6532296C
        */
        public static ToInt16 ($value: short) : short
        public static ToInt16 ($value: bigint) : short
        /**
        * @methodSwap ToInt16_EBB7509C_H82424F3E
        */
        public static ToInt16 ($value: float) : short
        /**
        * @methodSwap ToInt16_EBB7509C_H328EE55B
        */
        public static ToInt16 ($value: double) : short
        public static ToInt16 ($value: Decimal) : short
        public static ToInt16 ($value: string) : short
        public static ToInt16 ($value: string, $provider: IFormatProvider) : short
        public static ToInt16 ($value: DateTime) : short
        public static ToInt32 ($value: any) : int
        public static ToInt32 ($value: any, $provider: IFormatProvider) : int
        public static ToInt32 ($value: boolean) : int
        public static ToInt32 ($value: number) : int
        /**
        * @methodSwap ToInt32_EBB7509C_B79438BC
        */
        public static ToInt32 ($value: byte) : int
        /**
        * @methodSwap ToInt32_EBB7509C_H6532296C
        */
        public static ToInt32 ($value: short) : int
        /**
        * @methodSwap ToInt32_EBB7509C_F92D023A
        */
        public static ToInt32 ($value: int) : int
        public static ToInt32 ($value: bigint) : int
        /**
        * @methodSwap ToInt32_EBB7509C_H82424F3E
        */
        public static ToInt32 ($value: float) : int
        /**
        * @methodSwap ToInt32_EBB7509C_H328EE55B
        */
        public static ToInt32 ($value: double) : int
        public static ToInt32 ($value: Decimal) : int
        public static ToInt32 ($value: string) : int
        public static ToInt32 ($value: string, $provider: IFormatProvider) : int
        public static ToInt32 ($value: DateTime) : int
        public static ToInt64 ($value: any) : bigint
        public static ToInt64 ($value: any, $provider: IFormatProvider) : bigint
        public static ToInt64 ($value: boolean) : bigint
        public static ToInt64 ($value: number) : bigint
        /**
        * @methodSwap ToInt64_EBB7509C_B79438BC
        */
        public static ToInt64 ($value: byte) : bigint
        /**
        * @methodSwap ToInt64_EBB7509C_H6532296C
        */
        public static ToInt64 ($value: short) : bigint
        /**
        * @methodSwap ToInt64_EBB7509C_F92D023A
        */
        public static ToInt64 ($value: int) : bigint
        public static ToInt64 ($value: bigint) : bigint
        /**
        * @methodSwap ToInt64_EBB7509C_H82424F3E
        */
        public static ToInt64 ($value: float) : bigint
        /**
        * @methodSwap ToInt64_EBB7509C_H328EE55B
        */
        public static ToInt64 ($value: double) : bigint
        public static ToInt64 ($value: Decimal) : bigint
        public static ToInt64 ($value: string) : bigint
        public static ToInt64 ($value: string, $provider: IFormatProvider) : bigint
        public static ToInt64 ($value: DateTime) : bigint
        public static ToSingle ($value: any) : float
        public static ToSingle ($value: any, $provider: IFormatProvider) : float
        /**
        * @methodSwap ToSingle_EBB7509C_B79438BC
        */
        public static ToSingle ($value: byte) : float
        public static ToSingle ($value: number) : float
        /**
        * @methodSwap ToSingle_EBB7509C_H6532296C
        */
        public static ToSingle ($value: short) : float
        /**
        * @methodSwap ToSingle_EBB7509C_F92D023A
        */
        public static ToSingle ($value: int) : float
        public static ToSingle ($value: bigint) : float
        /**
        * @methodSwap ToSingle_EBB7509C_H82424F3E
        */
        public static ToSingle ($value: float) : float
        /**
        * @methodSwap ToSingle_EBB7509C_H328EE55B
        */
        public static ToSingle ($value: double) : float
        public static ToSingle ($value: Decimal) : float
        public static ToSingle ($value: string) : float
        public static ToSingle ($value: string, $provider: IFormatProvider) : float
        public static ToSingle ($value: boolean) : float
        public static ToSingle ($value: DateTime) : float
        public static ToDouble ($value: any) : double
        public static ToDouble ($value: any, $provider: IFormatProvider) : double
        /**
        * @methodSwap ToDouble_EBB7509C_B79438BC
        */
        public static ToDouble ($value: byte) : double
        /**
        * @methodSwap ToDouble_EBB7509C_H6532296C
        */
        public static ToDouble ($value: short) : double
        public static ToDouble ($value: number) : double
        /**
        * @methodSwap ToDouble_EBB7509C_F92D023A
        */
        public static ToDouble ($value: int) : double
        public static ToDouble ($value: bigint) : double
        /**
        * @methodSwap ToDouble_EBB7509C_H82424F3E
        */
        public static ToDouble ($value: float) : double
        /**
        * @methodSwap ToDouble_EBB7509C_H328EE55B
        */
        public static ToDouble ($value: double) : double
        public static ToDouble ($value: Decimal) : double
        public static ToDouble ($value: string) : double
        public static ToDouble ($value: string, $provider: IFormatProvider) : double
        public static ToDouble ($value: boolean) : double
        public static ToDouble ($value: DateTime) : double
        public static ToDecimal ($value: any) : Decimal
        public static ToDecimal ($value: any, $provider: IFormatProvider) : Decimal
        /**
        * @methodSwap ToDecimal_EBB7509C_B79438BC
        */
        public static ToDecimal ($value: byte) : Decimal
        public static ToDecimal ($value: number) : Decimal
        /**
        * @methodSwap ToDecimal_EBB7509C_H6532296C
        */
        public static ToDecimal ($value: short) : Decimal
        /**
        * @methodSwap ToDecimal_EBB7509C_F92D023A
        */
        public static ToDecimal ($value: int) : Decimal
        public static ToDecimal ($value: bigint) : Decimal
        /**
        * @methodSwap ToDecimal_EBB7509C_H82424F3E
        */
        public static ToDecimal ($value: float) : Decimal
        /**
        * @methodSwap ToDecimal_EBB7509C_H328EE55B
        */
        public static ToDecimal ($value: double) : Decimal
        public static ToDecimal ($value: string) : Decimal
        public static ToDecimal ($value: string, $provider: IFormatProvider) : Decimal
        public static ToDecimal ($value: Decimal) : Decimal
        public static ToDecimal ($value: boolean) : Decimal
        public static ToDecimal ($value: DateTime) : Decimal
        public static ToDateTime ($value: DateTime) : DateTime
        public static ToDateTime ($value: any) : DateTime
        public static ToDateTime ($value: any, $provider: IFormatProvider) : DateTime
        public static ToDateTime ($value: string) : DateTime
        public static ToDateTime ($value: string, $provider: IFormatProvider) : DateTime
        /**
        * @methodSwap ToDateTime_EBB7509C_B79438BC
        */
        public static ToDateTime ($value: byte) : DateTime
        /**
        * @methodSwap ToDateTime_EBB7509C_H6532296C
        */
        public static ToDateTime ($value: short) : DateTime
        /**
        * @methodSwap ToDateTime_EBB7509C_F92D023A
        */
        public static ToDateTime ($value: int) : DateTime
        public static ToDateTime ($value: bigint) : DateTime
        public static ToDateTime ($value: boolean) : DateTime
        public static ToDateTime ($value: number) : DateTime
        /**
        * @methodSwap ToDateTime_EBB7509C_H82424F3E
        */
        public static ToDateTime ($value: float) : DateTime
        /**
        * @methodSwap ToDateTime_EBB7509C_H328EE55B
        */
        public static ToDateTime ($value: double) : DateTime
        public static ToDateTime ($value: Decimal) : DateTime
        public static ToString ($value: any) : string
        public static ToString ($value: any, $provider: IFormatProvider) : string
        public static ToString ($value: boolean) : string
        public static ToString ($value: boolean, $provider: IFormatProvider) : string
        public static ToString ($value: number) : string
        public static ToString ($value: number, $provider: IFormatProvider) : string
        /**
        * @methodSwap ToString_EBB7509C_B79438BC
        */
        public static ToString ($value: byte) : string
        /**
        * @methodSwap ToString_EBB7509C_AC5A134E
        */
        public static ToString ($value: byte, $provider: IFormatProvider) : string
        /**
        * @methodSwap ToString_EBB7509C_H6532296C
        */
        public static ToString ($value: short) : string
        /**
        * @methodSwap ToString_EBB7509C_H6DD2267E
        */
        public static ToString ($value: short, $provider: IFormatProvider) : string
        /**
        * @methodSwap ToString_EBB7509C_F92D023A
        */
        public static ToString ($value: int) : string
        /**
        * @methodSwap ToString_EBB7509C_H78F1856C
        */
        public static ToString ($value: int, $provider: IFormatProvider) : string
        public static ToString ($value: bigint) : string
        public static ToString ($value: bigint, $provider: IFormatProvider) : string
        /**
        * @methodSwap ToString_EBB7509C_H82424F3E
        */
        public static ToString ($value: float) : string
        /**
        * @methodSwap ToString_EBB7509C_FFD9D468
        */
        public static ToString ($value: float, $provider: IFormatProvider) : string
        /**
        * @methodSwap ToString_EBB7509C_H328EE55B
        */
        public static ToString ($value: double) : string
        /**
        * @methodSwap ToString_EBB7509C_H12C27E01
        */
        public static ToString ($value: double, $provider: IFormatProvider) : string
        public static ToString ($value: Decimal) : string
        public static ToString ($value: Decimal, $provider: IFormatProvider) : string
        public static ToString ($value: DateTime) : string
        public static ToString ($value: DateTime, $provider: IFormatProvider) : string
        public static ToString ($value: string) : string
        public static ToString ($value: string, $provider: IFormatProvider) : string
        /**
        * @methodSwap ToByte_EBB7509C_H72D17FE0
        */
        public static ToByte ($value: string, $fromBase: int) : byte
        /**
        * @methodSwap ToInt16_EBB7509C_H72D17FE0
        */
        public static ToInt16 ($value: string, $fromBase: int) : short
        /**
        * @methodSwap ToInt32_EBB7509C_H72D17FE0
        */
        public static ToInt32 ($value: string, $fromBase: int) : int
        /**
        * @methodSwap ToInt64_EBB7509C_H72D17FE0
        */
        public static ToInt64 ($value: string, $fromBase: int) : bigint
        /**
        * @methodSwap ToString_EBB7509C_H5E6D3CB7
        */
        public static ToString ($value: byte, $toBase: int) : string
        /**
        * @methodSwap ToString_EBB7509C_B783AAC7
        */
        public static ToString ($value: short, $toBase: int) : string
        /**
        * @methodSwap ToString_EBB7509C_H2CFB2EE5
        */
        public static ToString ($value: int, $toBase: int) : string
        /**
        * @methodSwap ToString_EBB7509C_H40975B06
        */
        public static ToString ($value: bigint, $toBase: int) : string
        public static ToBase64String ($inArray: byte[]) : string
        public static ToBase64String ($inArray: byte[], $options: Base64FormattingOptions) : string
        /**
        * @methodSwap ToBase64String_EBB7509C_EAE74B1C
        */
        public static ToBase64String ($inArray: byte[], $offset: int, $length: int) : string
        /**
        * @methodSwap ToBase64String_EBB7509C_H5AFA9651
        */
        public static ToBase64String ($inArray: byte[], $offset: int, $length: int, $options: Base64FormattingOptions) : string
        /**
        * @methodSwap ToBase64CharArray_EBB7509C_D22F9FF6
        */
        public static ToBase64CharArray ($inArray: byte[], $offsetIn: int, $length: int, $outArray: number[], $offsetOut: int) : int
        /**
        * @methodSwap ToBase64CharArray_EBB7509C_H7E05694F
        */
        public static ToBase64CharArray ($inArray: byte[], $offsetIn: int, $length: int, $outArray: number[], $offsetOut: int, $options: Base64FormattingOptions) : int
        public static FromBase64String ($s: string) : byte[]
        public static FromBase64CharArray ($inArray: number[], $offset: int, $length: int) : byte[]
    }

    enum Base64FormattingOptions {
        None = 0,
        InsertLineBreaks = 1 
    }

    class EventArgs extends Object {

        public static Empty : EventArgs

        public constructor ()
    }

    interface EventHandler {
        (sender: any, e: EventArgs) : void; 
        Invoke?: (sender: any, e: EventArgs) => void;
    }
    var EventHandler: { new (func: (sender: any, e: EventArgs) => void): EventHandler; }

    interface EventHandler$1<TEventArgs> {
        (sender: any, e: TEventArgs) : void; 
        Invoke?: (sender: any, e: TEventArgs) => void;
    }

    class FormattableString extends Object implements IFormattable {

        public get Format(): string;
        public get ArgumentCount(): int;

        public GetArguments () : any[]
        public GetArgument ($index: int) : any
        public ToString ($formatProvider: IFormatProvider) : string
        public static Invariant ($formattable: FormattableString) : string
        public ToString () : string
    }

    class Guid extends ValueType implements IFormattable, ISpanFormattable, IComparable, IComparable$1<Guid>, IEquatable$1<Guid> {

        public static Empty : Guid

        public constructor ($b: byte[])
        public constructor ($a: int, $b: short, $c: short, $d: byte[])
        public constructor ($a: int, $b: short, $c: short, $d: byte, $e: byte, $f: byte, $g: byte, $h: byte, $i: byte, $j: byte, $k: byte)
        public constructor ($g: string)
        public static NewGuid () : Guid
        public static Parse ($input: string) : Guid
        public static TryParse ($input: string, $result: $Ref<Guid>) : boolean
        public static ParseExact ($input: string, $format: string) : Guid
        public static TryParseExact ($input: string, $format: string, $result: $Ref<Guid>) : boolean
        public ToByteArray () : byte[]
        public ToString () : string
        public GetHashCode () : int
        public Equals ($o: any) : boolean
        public Equals ($g: Guid) : boolean
        public CompareTo ($value: any) : int
        public CompareTo ($value: Guid) : int
        public ToString ($format: string) : string
        public ToString ($format: string, $provider: IFormatProvider) : string
        public static op_Equality ($a: Guid, $b: Guid) : boolean
        public static op_Inequality ($a: Guid, $b: Guid) : boolean
    }

    class HashCode extends ValueType {

        public static Combine<T1> ($value1: T1) : int
        public static Combine<T1,T2> ($value1: T1, $value2: T2) : int
        public static Combine<T1,T2,T3> ($value1: T1, $value2: T2, $value3: T3) : int
        public static Combine<T1,T2,T3,T4> ($value1: T1, $value2: T2, $value3: T3, $value4: T4) : int
        public static Combine<T1,T2,T3,T4,T5> ($value1: T1, $value2: T2, $value3: T3, $value4: T4, $value5: T5) : int
        public static Combine<T1,T2,T3,T4,T5,T6> ($value1: T1, $value2: T2, $value3: T3, $value4: T4, $value5: T5, $value6: T6) : int
        public static Combine<T1,T2,T3,T4,T5,T6,T7> ($value1: T1, $value2: T2, $value3: T3, $value4: T4, $value5: T5, $value6: T6, $value7: T7) : int
        public static Combine<T1,T2,T3,T4,T5,T6,T7,T8> ($value1: T1, $value2: T2, $value3: T3, $value4: T4, $value5: T5, $value6: T6, $value7: T7, $value8: T8) : int
        public Add<T> ($value: T) : void
        public Add<T> ($value: T, $comparer: System_Collections_Generic.IEqualityComparer$1<T>) : void
        public ToHashCode () : int
    }

    interface IAsyncDisposable {

        DisposeAsync? () : System_Threading_Tasks.ValueTask
    }

    interface AggregateException {

    }

    interface Exception extends System_Runtime_InteropServices._Exception, System_Runtime_Serialization.ISerializable {

    }

    class Nullable$1<T> extends ValueType {

        public get HasValue(): boolean;
        public get Value(): T;

        public constructor ($value: T)
        public GetValueOrDefault () : T
        public GetValueOrDefault ($defaultValue: T) : T
        public Equals ($other: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    interface ICustomFormatter {

        Format? ($format: string, $arg: any, $formatProvider: IFormatProvider) : string
    }

    interface IObservable$1<T> {

        Subscribe? ($observer: IObserver$1<T>) : IDisposable
    }

    interface IObserver$1<T> {

        OnNext? ($value: T) : void
        OnError? ($error: Exception) : void
        OnCompleted? () : void
    }

    interface IProgress$1<T> {

        Report? ($value: T) : void
    }

    class Index extends ValueType implements IEquatable$1<Index> {

        public static get Start(): Index;
        public static get End(): Index;
        public get Value(): int;
        public get IsFromEnd(): boolean;

        public constructor ($value: int, $fromEnd?: boolean)
        public static FromStart ($value: int) : Index
        public static FromEnd ($value: int) : Index
        public GetOffset ($length: int) : int
        public Equals ($value: any) : boolean
        public Equals ($other: Index) : boolean
        public GetHashCode () : int
        public ToString () : string
        public static op_Implicit ($value: int) : Index
    }

    class Lazy$1<T> extends Object {

        public get IsValueCreated(): boolean;
        public get Value(): T;

        public constructor ()
        public constructor ($value: T)
        public constructor ($valueFactory: Func$1<T>)
        public constructor ($isThreadSafe: boolean)
        public constructor ($mode: System_Threading.LazyThreadSafetyMode)
        public constructor ($valueFactory: Func$1<T>, $isThreadSafe: boolean)
        public constructor ($valueFactory: Func$1<T>, $mode: System_Threading.LazyThreadSafetyMode)
        public ToString () : string
    }

    class Nullable {

        public static Compare<T> ($n1: Nullable$1<T>, $n2: Nullable$1<T>) : int
        public static Equals<T> ($n1: Nullable$1<T>, $n2: Nullable$1<T>) : boolean
        public static GetUnderlyingType ($nullableType: Type) : Type
    }

    class Progress$1<T> extends Object implements IProgress$1<T> {

        public constructor ()
        public constructor ($handler: Action$1<T>)
        public add_ProgressChanged ($value: EventHandler$1<T>) : void
        public remove_ProgressChanged ($value: EventHandler$1<T>) : void
    }

    class Random extends Object {

        public constructor ()
        public constructor ($Seed: int)
        public Next () : int
        /**
        * @methodSwap Next_EBB7509C_H2CFB2EE5
        */
        public Next ($minValue: int, $maxValue: int) : int
        /**
        * @methodSwap Next_EBB7509C_F92D023A
        */
        public Next ($maxValue: int) : int
        public NextDouble () : double
        public NextBytes ($buffer: byte[]) : void
    }

    class Range extends ValueType implements IEquatable$1<Range> {

        public get Start(): Index;
        public get End(): Index;
        public static get All(): Range;

        public constructor ($start: Index, $end: Index)
        public Equals ($value: any) : boolean
        public Equals ($other: Range) : boolean
        public GetHashCode () : int
        public ToString () : string
        public static StartAt ($start: Index) : Range
        public static EndAt ($end: Index) : Range
        public GetOffsetAndLength ($length: int) : ValueTuple$2<int, int>
    }

    class ValueTuple$2<T1,T2> extends ValueType implements IComparable, IComparable$1<ValueTuple$2<T1, T2>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$2<T1, T2>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2

        public constructor ($item1: T1, $item2: T2)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$2<T1, T2>) : boolean
        public CompareTo ($other: ValueTuple$2<T1, T2>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ReadOnlyMemory$1<T> extends ValueType implements IEquatable$1<ReadOnlyMemory$1<T>> {

        public static get Empty(): ReadOnlyMemory$1<T>;
        public get Length(): int;
        public get IsEmpty(): boolean;

        public constructor ($array: T[])
        public constructor ($array: T[], $start: int, $length: int)
        public ToString () : string
        /**
        * @methodSwap Slice_EBB7509C_F92D023A
        */
        public Slice ($start: int) : ReadOnlyMemory$1<T>
        /**
        * @methodSwap Slice_EBB7509C_H2CFB2EE5
        */
        public Slice ($start: int, $length: int) : ReadOnlyMemory$1<T>
        public CopyTo ($destination: Memory$1<T>) : void
        public TryCopyTo ($destination: Memory$1<T>) : boolean
        public Pin () : System_Buffers.MemoryHandle
        public ToArray () : T[]
        public Equals ($obj: any) : boolean
        public Equals ($other: ReadOnlyMemory$1<T>) : boolean
        public GetHashCode () : int
    }

    interface ArraySegment$1<T> extends System_Collections_Generic.IList$1<T>, System_Collections_Generic.IReadOnlyList$1<T> {

    }

    interface Memory$1<T> extends IEquatable$1<Memory$1<T>> {

    }

    enum StringComparison {
        CurrentCulture = 0,
        CurrentCultureIgnoreCase = 1,
        InvariantCulture = 2,
        InvariantCultureIgnoreCase = 3,
        Ordinal = 4,
        OrdinalIgnoreCase = 5 
    }

    enum StringSplitOptions {
        None = 0,
        RemoveEmptyEntries = 1 
    }

    class Tuple {

        public static Create<T1> ($item1: T1) : Tuple$1<T1>
        public static Create<T1,T2> ($item1: T1, $item2: T2) : Tuple$2<T1, T2>
        public static Create<T1,T2,T3> ($item1: T1, $item2: T2, $item3: T3) : Tuple$3<T1, T2, T3>
        public static Create<T1,T2,T3,T4> ($item1: T1, $item2: T2, $item3: T3, $item4: T4) : Tuple$4<T1, T2, T3, T4>
        public static Create<T1,T2,T3,T4,T5> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5) : Tuple$5<T1, T2, T3, T4, T5>
        public static Create<T1,T2,T3,T4,T5,T6> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6) : Tuple$6<T1, T2, T3, T4, T5, T6>
        public static Create<T1,T2,T3,T4,T5,T6,T7> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7) : Tuple$7<T1, T2, T3, T4, T5, T6, T7>
        public static Create<T1,T2,T3,T4,T5,T6,T7,T8> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7, $item8: T8) : Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$1<T8>>
    }

    class Tuple$1<T1> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;

        public constructor ($item1: T1)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class Tuple$2<T1,T2> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;
        public get Item2(): T2;

        public constructor ($item1: T1, $item2: T2)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class Tuple$3<T1,T2,T3> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;
        public get Item2(): T2;
        public get Item3(): T3;

        public constructor ($item1: T1, $item2: T2, $item3: T3)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class Tuple$4<T1,T2,T3,T4> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;
        public get Item2(): T2;
        public get Item3(): T3;
        public get Item4(): T4;

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class Tuple$5<T1,T2,T3,T4,T5> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;
        public get Item2(): T2;
        public get Item3(): T3;
        public get Item4(): T4;
        public get Item5(): T5;

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class Tuple$6<T1,T2,T3,T4,T5,T6> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;
        public get Item2(): T2;
        public get Item3(): T3;
        public get Item4(): T4;
        public get Item5(): T5;
        public get Item6(): T6;

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class Tuple$7<T1,T2,T3,T4,T5,T6,T7> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;
        public get Item2(): T2;
        public get Item3(): T3;
        public get Item4(): T4;
        public get Item5(): T5;
        public get Item6(): T6;
        public get Item7(): T7;

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class Tuple$8<T1,T2,T3,T4,T5,T6,T7,TRest> extends Object implements IComparable, System_Collections.IStructuralComparable, ITupleInternal, System_Collections.IStructuralEquatable {

        public get Item1(): T1;
        public get Item2(): T2;
        public get Item3(): T3;
        public get Item4(): T4;
        public get Item5(): T5;
        public get Item6(): T6;
        public get Item7(): T7;
        public get Rest(): TRest;

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7, $rest: TRest)
        public Equals ($obj: any) : boolean
        public GetHashCode () : int
        public ToString () : string
    }

    class TupleExtensions {

        public static Deconstruct<T1> ($value: Tuple$1<T1>, $item1: $Ref<T1>) : void
        public static Deconstruct<T1,T2> ($value: Tuple$2<T1, T2>, $item1: $Ref<T1>, $item2: $Ref<T2>) : void
        public static Deconstruct<T1,T2,T3> ($value: Tuple$3<T1, T2, T3>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>) : void
        public static Deconstruct<T1,T2,T3,T4> ($value: Tuple$4<T1, T2, T3, T4>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>) : void
        public static Deconstruct<T1,T2,T3,T4,T5> ($value: Tuple$5<T1, T2, T3, T4, T5>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6> ($value: Tuple$6<T1, T2, T3, T4, T5, T6>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7> ($value: Tuple$7<T1, T2, T3, T4, T5, T6, T7>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$1<T8>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$2<T8, T9>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$3<T8, T9, T10>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$4<T8, T9, T10, T11>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$5<T8, T9, T10, T11, T12>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$6<T8, T9, T10, T11, T12, T13>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$7<T8, T9, T10, T11, T12, T13, T14>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$8<T8, T9, T10, T11, T12, T13, T14, Tuple$1<T15>>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>, $item15: $Ref<T15>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$8<T8, T9, T10, T11, T12, T13, T14, Tuple$2<T15, T16>>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>, $item15: $Ref<T15>, $item16: $Ref<T16>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$8<T8, T9, T10, T11, T12, T13, T14, Tuple$3<T15, T16, T17>>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>, $item15: $Ref<T15>, $item16: $Ref<T16>, $item17: $Ref<T17>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$8<T8, T9, T10, T11, T12, T13, T14, Tuple$4<T15, T16, T17, T18>>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>, $item15: $Ref<T15>, $item16: $Ref<T16>, $item17: $Ref<T17>, $item18: $Ref<T18>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18,T19> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$8<T8, T9, T10, T11, T12, T13, T14, Tuple$5<T15, T16, T17, T18, T19>>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>, $item15: $Ref<T15>, $item16: $Ref<T16>, $item17: $Ref<T17>, $item18: $Ref<T18>, $item19: $Ref<T19>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18,T19,T20> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$8<T8, T9, T10, T11, T12, T13, T14, Tuple$6<T15, T16, T17, T18, T19, T20>>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>, $item15: $Ref<T15>, $item16: $Ref<T16>, $item17: $Ref<T17>, $item18: $Ref<T18>, $item19: $Ref<T19>, $item20: $Ref<T20>) : void
        public static Deconstruct<T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13,T14,T15,T16,T17,T18,T19,T20,T21> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$8<T8, T9, T10, T11, T12, T13, T14, Tuple$7<T15, T16, T17, T18, T19, T20, T21>>>, $item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>, $item8: $Ref<T8>, $item9: $Ref<T9>, $item10: $Ref<T10>, $item11: $Ref<T11>, $item12: $Ref<T12>, $item13: $Ref<T13>, $item14: $Ref<T14>, $item15: $Ref<T15>, $item16: $Ref<T16>, $item17: $Ref<T17>, $item18: $Ref<T18>, $item19: $Ref<T19>, $item20: $Ref<T20>, $item21: $Ref<T21>) : void
        public static ToValueTuple<T1> ($value: Tuple$1<T1>) : ValueTuple$1<T1>
        public static ToValueTuple<T1,T2> ($value: Tuple$2<T1, T2>) : ValueTuple$2<T1, T2>
        public static ToValueTuple<T1,T2,T3> ($value: Tuple$3<T1, T2, T3>) : ValueTuple$3<T1, T2, T3>
        public static ToValueTuple<T1,T2,T3,T4> ($value: Tuple$4<T1, T2, T3, T4>) : ValueTuple$4<T1, T2, T3, T4>
        public static ToValueTuple<T1,T2,T3,T4,T5> ($value: Tuple$5<T1, T2, T3, T4, T5>) : ValueTuple$5<T1, T2, T3, T4, T5>
        public static ToValueTuple<T1,T2,T3,T4,T5,T6> ($value: Tuple$6<T1, T2, T3, T4, T5, T6>) : ValueTuple$6<T1, T2, T3, T4, T5, T6>
        public static ToValueTuple<T1,T2,T3,T4,T5,T6,T7> ($value: Tuple$7<T1, T2, T3, T4, T5, T6, T7>) : ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>
        public static ToValueTuple<T1,T2,T3,T4,T5,T6,T7,T8> ($value: Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$1<T8>>) : ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, ValueTuple$1<T8>>
        public static ToTuple<T1> ($value: ValueTuple$1<T1>) : Tuple$1<T1>
        public static ToTuple<T1,T2> ($value: ValueTuple$2<T1, T2>) : Tuple$2<T1, T2>
        public static ToTuple<T1,T2,T3> ($value: ValueTuple$3<T1, T2, T3>) : Tuple$3<T1, T2, T3>
        public static ToTuple<T1,T2,T3,T4> ($value: ValueTuple$4<T1, T2, T3, T4>) : Tuple$4<T1, T2, T3, T4>
        public static ToTuple<T1,T2,T3,T4,T5> ($value: ValueTuple$5<T1, T2, T3, T4, T5>) : Tuple$5<T1, T2, T3, T4, T5>
        public static ToTuple<T1,T2,T3,T4,T5,T6> ($value: ValueTuple$6<T1, T2, T3, T4, T5, T6>) : Tuple$6<T1, T2, T3, T4, T5, T6>
        public static ToTuple<T1,T2,T3,T4,T5,T6,T7> ($value: ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>) : Tuple$7<T1, T2, T3, T4, T5, T6, T7>
        public static ToTuple<T1,T2,T3,T4,T5,T6,T7,T8> ($value: ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, ValueTuple$1<T8>>) : Tuple$8<T1, T2, T3, T4, T5, T6, T7, Tuple$1<T8>>
    }

    class ValueTuple$1<T1> extends ValueType implements IComparable, IComparable$1<ValueTuple$1<T1>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$1<T1>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1

        public constructor ($item1: T1)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$1<T1>) : boolean
        public CompareTo ($other: ValueTuple$1<T1>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ValueTuple$3<T1,T2,T3> extends ValueType implements IComparable, IComparable$1<ValueTuple$3<T1, T2, T3>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$3<T1, T2, T3>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2
        public Item3 : T3

        public constructor ($item1: T1, $item2: T2, $item3: T3)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$3<T1, T2, T3>) : boolean
        public CompareTo ($other: ValueTuple$3<T1, T2, T3>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ValueTuple$4<T1,T2,T3,T4> extends ValueType implements IComparable, IComparable$1<ValueTuple$4<T1, T2, T3, T4>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$4<T1, T2, T3, T4>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2
        public Item3 : T3
        public Item4 : T4

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$4<T1, T2, T3, T4>) : boolean
        public CompareTo ($other: ValueTuple$4<T1, T2, T3, T4>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ValueTuple$5<T1,T2,T3,T4,T5> extends ValueType implements IComparable, IComparable$1<ValueTuple$5<T1, T2, T3, T4, T5>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$5<T1, T2, T3, T4, T5>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2
        public Item3 : T3
        public Item4 : T4
        public Item5 : T5

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$5<T1, T2, T3, T4, T5>) : boolean
        public CompareTo ($other: ValueTuple$5<T1, T2, T3, T4, T5>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ValueTuple$6<T1,T2,T3,T4,T5,T6> extends ValueType implements IComparable, IComparable$1<ValueTuple$6<T1, T2, T3, T4, T5, T6>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$6<T1, T2, T3, T4, T5, T6>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2
        public Item3 : T3
        public Item4 : T4
        public Item5 : T5
        public Item6 : T6

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$6<T1, T2, T3, T4, T5, T6>) : boolean
        public CompareTo ($other: ValueTuple$6<T1, T2, T3, T4, T5, T6>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ValueTuple$7<T1,T2,T3,T4,T5,T6,T7> extends ValueType implements IComparable, IComparable$1<ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2
        public Item3 : T3
        public Item4 : T4
        public Item5 : T5
        public Item6 : T6
        public Item7 : T7

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>) : boolean
        public CompareTo ($other: ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ValueTuple$8<T1,T2,T3,T4,T5,T6,T7,TRest> extends ValueType implements IComparable, IComparable$1<ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Item1 : T1
        public Item2 : T2
        public Item3 : T3
        public Item4 : T4
        public Item5 : T5
        public Item6 : T6
        public Item7 : T7
        public Rest : TRest

        public constructor ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7, $rest: TRest)
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>) : boolean
        public CompareTo ($other: ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, TRest>) : int
        public GetHashCode () : int
        public ToString () : string
    }

    class ValueTuple extends ValueType implements IComparable, IComparable$1<ValueTuple>, System_Collections.IStructuralComparable, IEquatable$1<ValueTuple>, IValueTupleInternal, System_Collections.IStructuralEquatable {

        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTuple) : boolean
        public CompareTo ($other: ValueTuple) : int
        public GetHashCode () : int
        public ToString () : string
        public static Create () : ValueTuple
        public static Create<T1> ($item1: T1) : ValueTuple$1<T1>
        public static Create<T1,T2> ($item1: T1, $item2: T2) : ValueTuple$2<T1, T2>
        public static Create<T1,T2,T3> ($item1: T1, $item2: T2, $item3: T3) : ValueTuple$3<T1, T2, T3>
        public static Create<T1,T2,T3,T4> ($item1: T1, $item2: T2, $item3: T3, $item4: T4) : ValueTuple$4<T1, T2, T3, T4>
        public static Create<T1,T2,T3,T4,T5> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5) : ValueTuple$5<T1, T2, T3, T4, T5>
        public static Create<T1,T2,T3,T4,T5,T6> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6) : ValueTuple$6<T1, T2, T3, T4, T5, T6>
        public static Create<T1,T2,T3,T4,T5,T6,T7> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7) : ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>
        public static Create<T1,T2,T3,T4,T5,T6,T7,T8> ($item1: T1, $item2: T2, $item3: T3, $item4: T4, $item5: T5, $item6: T6, $item7: T7, $item8: T8) : ValueTuple$8<T1, T2, T3, T4, T5, T6, T7, ValueTuple$1<T8>>
    }

    interface OperationCanceledException {

    }

    interface SystemException {

    }

    interface ArgumentException {

    }

    interface Converter$2<TInput,TOutput> {
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
    }

    interface Comparison$1<T> {
        (x: T, y: T) : int; 
        Invoke?: (x: T, y: T) => int;
    }

    interface Tuple$1<T1> {

        /**
        * @extension System.TupleExtensions.Deconstruct<T1>
        */
        Deconstruct ($item1: $Ref<T1>) : void
        /**
        * @extension System.TupleExtensions.ToValueTuple<T1>
        */
        ToValueTuple () : ValueTuple$1<T1>
    }

    interface Tuple$2<T1,T2> {

        /**
        * @extension System.TupleExtensions.Deconstruct<T1, T2>
        */
        Deconstruct ($item1: $Ref<T1>, $item2: $Ref<T2>) : void
        /**
        * @extension System.TupleExtensions.ToValueTuple<T1, T2>
        */
        ToValueTuple () : ValueTuple$2<T1, T2>
    }

    interface Tuple$3<T1,T2,T3> {

        /**
        * @extension System.TupleExtensions.Deconstruct<T1, T2, T3>
        */
        Deconstruct ($item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>) : void
        /**
        * @extension System.TupleExtensions.ToValueTuple<T1, T2, T3>
        */
        ToValueTuple () : ValueTuple$3<T1, T2, T3>
    }

    interface Tuple$4<T1,T2,T3,T4> {

        /**
        * @extension System.TupleExtensions.Deconstruct<T1, T2, T3, T4>
        */
        Deconstruct ($item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>) : void
        /**
        * @extension System.TupleExtensions.ToValueTuple<T1, T2, T3, T4>
        */
        ToValueTuple () : ValueTuple$4<T1, T2, T3, T4>
    }

    interface Tuple$5<T1,T2,T3,T4,T5> {

        /**
        * @extension System.TupleExtensions.Deconstruct<T1, T2, T3, T4, T5>
        */
        Deconstruct ($item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>) : void
        /**
        * @extension System.TupleExtensions.ToValueTuple<T1, T2, T3, T4, T5>
        */
        ToValueTuple () : ValueTuple$5<T1, T2, T3, T4, T5>
    }

    interface Tuple$6<T1,T2,T3,T4,T5,T6> {

        /**
        * @extension System.TupleExtensions.Deconstruct<T1, T2, T3, T4, T5, T6>
        */
        Deconstruct ($item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>) : void
        /**
        * @extension System.TupleExtensions.ToValueTuple<T1, T2, T3, T4, T5, T6>
        */
        ToValueTuple () : ValueTuple$6<T1, T2, T3, T4, T5, T6>
    }

    interface Tuple$7<T1,T2,T3,T4,T5,T6,T7> {

        /**
        * @extension System.TupleExtensions.Deconstruct<T1, T2, T3, T4, T5, T6, T7>
        */
        Deconstruct ($item1: $Ref<T1>, $item2: $Ref<T2>, $item3: $Ref<T3>, $item4: $Ref<T4>, $item5: $Ref<T5>, $item6: $Ref<T6>, $item7: $Ref<T7>) : void
        /**
        * @extension System.TupleExtensions.ToValueTuple<T1, T2, T3, T4, T5, T6, T7>
        */
        ToValueTuple () : ValueTuple$7<T1, T2, T3, T4, T5, T6, T7>
    }

    interface ValueTuple$1<T1> {

        /**
        * @extension System.TupleExtensions.ToTuple<T1>
        */
        ToTuple () : Tuple$1<T1>
    }

    interface ValueTuple$2<T1,T2> {

        /**
        * @extension System.TupleExtensions.ToTuple<T1, T2>
        */
        ToTuple () : Tuple$2<T1, T2>
    }

    interface ValueTuple$3<T1,T2,T3> {

        /**
        * @extension System.TupleExtensions.ToTuple<T1, T2, T3>
        */
        ToTuple () : Tuple$3<T1, T2, T3>
    }

    interface ValueTuple$4<T1,T2,T3,T4> {

        /**
        * @extension System.TupleExtensions.ToTuple<T1, T2, T3, T4>
        */
        ToTuple () : Tuple$4<T1, T2, T3, T4>
    }

    interface ValueTuple$5<T1,T2,T3,T4,T5> {

        /**
        * @extension System.TupleExtensions.ToTuple<T1, T2, T3, T4, T5>
        */
        ToTuple () : Tuple$5<T1, T2, T3, T4, T5>
    }

    interface ValueTuple$6<T1,T2,T3,T4,T5,T6> {

        /**
        * @extension System.TupleExtensions.ToTuple<T1, T2, T3, T4, T5, T6>
        */
        ToTuple () : Tuple$6<T1, T2, T3, T4, T5, T6>
    }

    interface ValueTuple$7<T1,T2,T3,T4,T5,T6,T7> {

        /**
        * @extension System.TupleExtensions.ToTuple<T1, T2, T3, T4, T5, T6, T7>
        */
        ToTuple () : Tuple$7<T1, T2, T3, T4, T5, T6, T7>
    }

    interface IAsyncDisposable {

        /**
        * @extension System.Threading.Tasks.TaskAsyncEnumerableExtensions.ConfigureAwait
        */
        ConfigureAwait? ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredAsyncDisposable
    }

}

declare module 'System.Runtime.Serialization' {
    import * as System from 'System'

    interface IDeserializationCallback {

    }

    interface ISerializable {

    }

    interface SerializationInfo {

    }

    interface StreamingContext {

    }

}

declare module 'System.TimeZoneInfo' {
    import * as System from 'System'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    class AdjustmentRule extends System.Object implements System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, System.IEquatable$1<AdjustmentRule> {

        public get DateStart(): System.DateTime;
        public get DateEnd(): System.DateTime;
        public get DaylightDelta(): System.TimeSpan;
        public get DaylightTransitionStart(): TransitionTime;
        public get DaylightTransitionEnd(): TransitionTime;

        public Equals ($other: AdjustmentRule) : boolean
        public GetHashCode () : int
        public static CreateAdjustmentRule ($dateStart: System.DateTime, $dateEnd: System.DateTime, $daylightDelta: System.TimeSpan, $daylightTransitionStart: TransitionTime, $daylightTransitionEnd: TransitionTime) : AdjustmentRule
    }

    class TransitionTime extends System.ValueType implements System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, System.IEquatable$1<TransitionTime> {

        public get TimeOfDay(): System.DateTime;
        public get Month(): int;
        public get Week(): int;
        public get Day(): int;
        public get DayOfWeek(): System.DayOfWeek;
        public get IsFixedDateRule(): boolean;

        public Equals ($obj: any) : boolean
        public Equals ($other: TransitionTime) : boolean
        public GetHashCode () : int
        public static CreateFixedDateRule ($timeOfDay: System.DateTime, $month: int, $day: int) : TransitionTime
        public static CreateFloatingDateRule ($timeOfDay: System.DateTime, $month: int, $week: int, $dayOfWeek: System.DayOfWeek) : TransitionTime
        public static op_Equality ($t1: TransitionTime, $t2: TransitionTime) : boolean
        public static op_Inequality ($t1: TransitionTime, $t2: TransitionTime) : boolean
    }

}

declare module 'System.Reflection' {
    import * as System from 'System'
    import * as System_Runtime_InteropServices from 'System.Runtime.InteropServices'

    interface IReflect {

    }

    interface MemberInfo extends ICustomAttributeProvider, System_Runtime_InteropServices._MemberInfo {

    }

    interface ICustomAttributeProvider {

    }

    interface MethodInfo extends System_Runtime_InteropServices._MethodInfo {

    }

    interface MethodBase extends System_Runtime_InteropServices._MethodBase {

    }

}

declare module 'System.Runtime.InteropServices' {

    interface _Type {

    }

    interface _MemberInfo {

    }

    interface _MethodInfo {

    }

    interface _MethodBase {

    }

    interface _Exception {

    }

}

declare module 'System.Globalization' {
    import * as System from 'System'

    interface CultureInfo extends System.ICloneable, System.IFormatProvider {

    }

    enum UnicodeCategory {
        UppercaseLetter = 0,
        LowercaseLetter = 1,
        TitlecaseLetter = 2,
        ModifierLetter = 3,
        OtherLetter = 4,
        NonSpacingMark = 5,
        SpacingCombiningMark = 6,
        EnclosingMark = 7,
        DecimalDigitNumber = 8,
        LetterNumber = 9,
        OtherNumber = 10,
        SpaceSeparator = 11,
        LineSeparator = 12,
        ParagraphSeparator = 13,
        Control = 14,
        Format = 15,
        Surrogate = 16,
        PrivateUse = 17,
        ConnectorPunctuation = 18,
        DashPunctuation = 19,
        OpenPunctuation = 20,
        ClosePunctuation = 21,
        InitialQuotePunctuation = 22,
        FinalQuotePunctuation = 23,
        OtherPunctuation = 24,
        MathSymbol = 25,
        CurrencySymbol = 26,
        ModifierSymbol = 27,
        OtherSymbol = 28,
        OtherNotAssigned = 29 
    }

    enum TimeSpanStyles {
        None = 0,
        AssumeNegative = 1 
    }

    enum DateTimeStyles {
        None = 0,
        AllowLeadingWhite = 1,
        AllowTrailingWhite = 2,
        AllowInnerWhite = 4,
        AllowWhiteSpaces = 7,
        NoCurrentDateDefault = 8,
        AdjustToUniversal = 16,
        AssumeLocal = 32,
        AssumeUniversal = 64,
        RoundtripKind = 128 
    }

    interface Calendar extends System.ICloneable {

    }

}

declare module 'System.Collections.ObjectModel' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Collections from 'System.Collections'
    import * as System_Collections_ObjectModel_ReadOnlyDictionary$2 from 'System.Collections.ObjectModel.ReadOnlyDictionary$2'

    class ReadOnlyCollection$1<T> extends System.Object implements System_Collections_Generic.IList$1<T>, System_Collections.IList, System_Collections_Generic.IReadOnlyList$1<T> {

        public get Count(): int;

        public constructor ($list: System_Collections_Generic.IList$1<T>)
        public Contains ($value: T) : boolean
        public CopyTo ($array: T[], $index: int) : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<T>
        public IndexOf ($value: T) : int
        public get_Item ($index: int) : T
        public [Symbol.iterator]() : IterableIterator<T>
    }

    class Collection$1<T> extends System.Object implements System_Collections_Generic.IList$1<T>, System_Collections.IList, System_Collections_Generic.IReadOnlyList$1<T> {

        public get Count(): int;

        public constructor ()
        public constructor ($list: System_Collections_Generic.IList$1<T>)
        public Add ($item: T) : void
        public Clear () : void
        public CopyTo ($array: T[], $index: int) : void
        public Contains ($item: T) : boolean
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<T>
        public IndexOf ($item: T) : int
        public Insert ($index: int, $item: T) : void
        public Remove ($item: T) : boolean
        public RemoveAt ($index: int) : void
        public get_Item ($index: int) : T
        public set_Item ($index: int, $value: T) : void
        public [Symbol.iterator]() : IterableIterator<T>
    }

    class KeyedCollection$2<TKey,TItem> extends Collection$1<TItem> {

        public get Comparer(): System_Collections_Generic.IEqualityComparer$1<TKey>;

        public Contains ($key: TKey) : boolean
        public TryGetValue ($key: TKey, $item: $Ref<TItem>) : boolean
        public Remove ($key: TKey) : boolean
        public get_Item ($key: TKey) : TItem
        public [Symbol.iterator]() : IterableIterator<TItem>
    }

    class ReadOnlyDictionary$2<TKey,TValue> extends System.Object implements System_Collections_Generic.IDictionary$2<TKey,TValue>, System_Collections.IDictionary, System_Collections_Generic.IReadOnlyDictionary$2<TKey,TValue> {

        public get Keys(): System_Collections_ObjectModel_ReadOnlyDictionary$2.KeyCollection<TKey, TValue>;
        public get Values(): System_Collections_ObjectModel_ReadOnlyDictionary$2.ValueCollection<TKey, TValue>;
        public get Count(): int;

        public constructor ($dictionary: System_Collections_Generic.IDictionary$2<TKey, TValue>)
        public ContainsKey ($key: TKey) : boolean
        public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<System_Collections_Generic.KeyValuePair$2<TKey, TValue>>
        public get_Item ($key: TKey) : TValue
        public [Symbol.iterator]() : IterableIterator<System_Collections_Generic.KeyValuePair$2<TKey, TValue>>
    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Threading from 'System.Threading'
    import * as System_Threading_Tasks from 'System.Threading.Tasks'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as System_Collections_Generic_Dictionary$2 from 'System.Collections.Generic.Dictionary$2'
    import * as System_Collections_ObjectModel from 'System.Collections.ObjectModel'
    import * as System_Collections_Generic_List$1 from 'System.Collections.Generic.List$1'
    import * as System_Collections_Generic_Queue$1 from 'System.Collections.Generic.Queue$1'
    import * as System_Collections_Generic_Stack$1 from 'System.Collections.Generic.Stack$1'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'

    interface IList$1<T> extends ICollection$1<T> {

        IndexOf? ($item: T) : int
        Insert? ($index: int, $item: T) : void
        RemoveAt? ($index: int) : void
        get_Item? ($index: int) : T
        set_Item? ($index: int, $value: T) : void
    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

        readonly Count? : int
        readonly IsReadOnly? : boolean

        Add? ($item: T) : void
        Clear? () : void
        Contains? ($item: T) : boolean
        CopyTo? ($array: T[], $arrayIndex: int) : void
        Remove? ($item: T) : boolean
    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

        GetEnumerator? () : IEnumerator$1<T>
    }

    interface IEnumerator$1<T> extends System_Collections.IEnumerator, System.IDisposable {

        readonly Current? : T

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

        get_Item? ($index: int) : T
    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

        readonly Count? : int

    }

    interface IEqualityComparer$1<T> {

        Equals? ($x: T, $y: T) : boolean
        GetHashCode? ($obj: T) : int
    }

    interface IAsyncEnumerable$1<T> {

        GetAsyncEnumerator? ($cancellationToken?: System_Threading.CancellationToken) : IAsyncEnumerator$1<T>
    }

    interface IAsyncEnumerator$1<T> extends System.IAsyncDisposable {

        readonly Current? : T

        MoveNextAsync? () : System_Threading_Tasks.ValueTask$1<boolean>
    }

    interface IDictionary$2<TKey,TValue> extends ICollection$1<KeyValuePair$2<TKey, TValue>> {

        readonly Keys? : ICollection$1<TKey>
        readonly Values? : ICollection$1<TValue>

        ContainsKey? ($key: TKey) : boolean
        Add? ($key: TKey, $value: TValue) : void
        Remove? ($key: TKey) : boolean
        TryGetValue? ($key: TKey, $value: $Ref<TValue>) : boolean
        get_Item? ($key: TKey) : TValue
        set_Item? ($key: TKey, $value: TValue) : void
    }

    class KeyValuePair$2<TKey,TValue> extends System.ValueType {

        public get Key(): TKey;
        public get Value(): TValue;

        public constructor ($key: TKey, $value: TValue)
        public ToString () : string
        public Deconstruct ($key: $Ref<TKey>, $value: $Ref<TValue>) : void
    }

    interface IReadOnlyDictionary$2<TKey,TValue> extends IReadOnlyCollection$1<KeyValuePair$2<TKey, TValue>> {

        readonly Keys? : IEnumerable$1<TKey>
        readonly Values? : IEnumerable$1<TValue>

        ContainsKey? ($key: TKey) : boolean
        TryGetValue? ($key: TKey, $value: $Ref<TValue>) : boolean
        get_Item? ($key: TKey) : TValue
    }

    class Dictionary$2<TKey,TValue> extends System.Object implements IDictionary$2<TKey,TValue>, System_Collections.IDictionary, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable, IReadOnlyDictionary$2<TKey,TValue> {

        public get Comparer(): IEqualityComparer$1<TKey>;
        public get Count(): int;
        public get Keys(): System_Collections_Generic_Dictionary$2.KeyCollection<TKey, TValue>;
        public get Values(): System_Collections_Generic_Dictionary$2.ValueCollection<TKey, TValue>;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($comparer: IEqualityComparer$1<TKey>)
        public constructor ($capacity: int, $comparer: IEqualityComparer$1<TKey>)
        public constructor ($dictionary: IDictionary$2<TKey, TValue>)
        public constructor ($dictionary: IDictionary$2<TKey, TValue>, $comparer: IEqualityComparer$1<TKey>)
        public constructor ($collection: IEnumerable$1<KeyValuePair$2<TKey, TValue>>)
        public constructor ($collection: IEnumerable$1<KeyValuePair$2<TKey, TValue>>, $comparer: IEqualityComparer$1<TKey>)
        public Add ($key: TKey, $value: TValue) : void
        public Clear () : void
        public ContainsKey ($key: TKey) : boolean
        public ContainsValue ($value: TValue) : boolean
        public GetEnumerator () : System_Collections_Generic_Dictionary$2.Enumerator<TKey, TValue>
        public GetObjectData ($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext) : void
        public OnDeserialization ($sender: any) : void
        public Remove ($key: TKey) : boolean
        public Remove ($key: TKey, $value: $Ref<TValue>) : boolean
        public TryGetValue ($key: TKey, $value: $Ref<TValue>) : boolean
        public TryAdd ($key: TKey, $value: TValue) : boolean
        public EnsureCapacity ($capacity: int) : int
        public TrimExcess () : void
        /**
        * @methodSwap TrimExcess_EBB7509C_F92D023A
        */
        public TrimExcess ($capacity: int) : void
        public get_Item ($key: TKey) : TValue
        public set_Item ($key: TKey, $value: TValue) : void
        public [Symbol.iterator]() : IterableIterator<KeyValuePair$2<TKey, TValue>>
    }

    interface IComparer$1<T> {

        Compare? ($x: T, $y: T) : int
    }

    class KeyNotFoundException extends System.SystemException {

        public constructor ()
        public constructor ($message: string)
        public constructor ($message: string, $innerException: System.Exception)
    }

    class KeyValuePair {

        public static Create<TKey,TValue> ($key: TKey, $value: TValue) : KeyValuePair$2<TKey, TValue>
    }

    class List$1<T> extends System.Object implements IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

        public get Capacity(): int;
        public set Capacity(value: int);
        public get Count(): int;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($collection: IEnumerable$1<T>)
        public Add ($item: T) : void
        public AddRange ($collection: IEnumerable$1<T>) : void
        public AsReadOnly () : System_Collections_ObjectModel.ReadOnlyCollection$1<T>
        /**
        * @methodSwap BinarySearch_EBB7509C_H666473CF
        */
        public BinarySearch ($index: int, $count: int, $item: T, $comparer: IComparer$1<T>) : int
        public BinarySearch ($item: T) : int
        public BinarySearch ($item: T, $comparer: IComparer$1<T>) : int
        public Clear () : void
        public Contains ($item: T) : boolean
        public ConvertAll<TOutput> ($converter: System.Converter$2<T, TOutput>) : List$1<TOutput>
        public CopyTo ($array: T[]) : void
        /**
        * @methodSwap CopyTo_EBB7509C_F4E13BEA
        */
        public CopyTo ($index: int, $array: T[], $arrayIndex: int, $count: int) : void
        /**
        * @methodSwap CopyTo_EBB7509C_H67B06CE6
        */
        public CopyTo ($array: T[], $arrayIndex: int) : void
        public Exists ($match: System.Predicate$1<T>) : boolean
        public Find ($match: System.Predicate$1<T>) : T
        public FindAll ($match: System.Predicate$1<T>) : List$1<T>
        public FindIndex ($match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindIndex_EBB7509C_H73E258F1
        */
        public FindIndex ($startIndex: int, $match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindIndex_EBB7509C_A0F1585A
        */
        public FindIndex ($startIndex: int, $count: int, $match: System.Predicate$1<T>) : int
        public FindLast ($match: System.Predicate$1<T>) : T
        public FindLastIndex ($match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindLastIndex_EBB7509C_H73E258F1
        */
        public FindLastIndex ($startIndex: int, $match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindLastIndex_EBB7509C_A0F1585A
        */
        public FindLastIndex ($startIndex: int, $count: int, $match: System.Predicate$1<T>) : int
        public ForEach ($action: System.Action$1<T>) : void
        public GetEnumerator () : System_Collections_Generic_List$1.Enumerator<T>
        public GetRange ($index: int, $count: int) : List$1<T>
        public IndexOf ($item: T) : int
        /**
        * @methodSwap IndexOf_EBB7509C_H6D080506
        */
        public IndexOf ($item: T, $index: int) : int
        /**
        * @methodSwap IndexOf_EBB7509C_H98F5CA19
        */
        public IndexOf ($item: T, $index: int, $count: int) : int
        public Insert ($index: int, $item: T) : void
        public InsertRange ($index: int, $collection: IEnumerable$1<T>) : void
        public LastIndexOf ($item: T) : int
        /**
        * @methodSwap LastIndexOf_EBB7509C_H6D080506
        */
        public LastIndexOf ($item: T, $index: int) : int
        /**
        * @methodSwap LastIndexOf_EBB7509C_H98F5CA19
        */
        public LastIndexOf ($item: T, $index: int, $count: int) : int
        public Remove ($item: T) : boolean
        public RemoveAll ($match: System.Predicate$1<T>) : int
        public RemoveAt ($index: int) : void
        public RemoveRange ($index: int, $count: int) : void
        public Reverse () : void
        /**
        * @methodSwap Reverse_EBB7509C_H2CFB2EE5
        */
        public Reverse ($index: int, $count: int) : void
        public Sort () : void
        public Sort ($comparer: IComparer$1<T>) : void
        /**
        * @methodSwap Sort_EBB7509C_C2F3E73B
        */
        public Sort ($index: int, $count: int, $comparer: IComparer$1<T>) : void
        public Sort ($comparison: System.Comparison$1<T>) : void
        public ToArray () : T[]
        public TrimExcess () : void
        public TrueForAll ($match: System.Predicate$1<T>) : boolean
        public get_Item ($index: int) : T
        public set_Item ($index: int, $value: T) : void
        public [Symbol.iterator]() : IterableIterator<T>
    }

    class CollectionExtensions {

        public static GetValueOrDefault<TKey,TValue> ($dictionary: IReadOnlyDictionary$2<TKey, TValue>, $key: TKey) : TValue
        public static GetValueOrDefault<TKey,TValue> ($dictionary: IReadOnlyDictionary$2<TKey, TValue>, $key: TKey, $defaultValue: TValue) : TValue
        public static TryAdd<TKey,TValue> ($dictionary: IDictionary$2<TKey, TValue>, $key: TKey, $value: TValue) : boolean
        public static Remove<TKey,TValue> ($dictionary: IDictionary$2<TKey, TValue>, $key: TKey, $value: $Ref<TValue>) : boolean
    }

    class Queue$1<T> extends System.Object implements System_Collections.ICollection, IReadOnlyCollection$1<T> {

        public get Count(): int;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($collection: IEnumerable$1<T>)
        public Clear () : void
        public CopyTo ($array: T[], $arrayIndex: int) : void
        public Enqueue ($item: T) : void
        public GetEnumerator () : System_Collections_Generic_Queue$1.Enumerator<T>
        public Dequeue () : T
        public TryDequeue ($result: $Ref<T>) : boolean
        public Peek () : T
        public TryPeek ($result: $Ref<T>) : boolean
        public Contains ($item: T) : boolean
        public ToArray () : T[]
        public TrimExcess () : void
        public [Symbol.iterator]() : IterableIterator<T>
    }

    class Stack$1<T> extends System.Object implements System_Collections.ICollection, IReadOnlyCollection$1<T> {

        public get Count(): int;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($collection: IEnumerable$1<T>)
        public Clear () : void
        public Contains ($item: T) : boolean
        public CopyTo ($array: T[], $arrayIndex: int) : void
        public GetEnumerator () : System_Collections_Generic_Stack$1.Enumerator<T>
        public TrimExcess () : void
        public Peek () : T
        public TryPeek ($result: $Ref<T>) : boolean
        public Pop () : T
        public TryPop ($result: $Ref<T>) : boolean
        public Push ($item: T) : void
        public ToArray () : T[]
        public [Symbol.iterator]() : IterableIterator<T>
    }

    class Comparer$1<T> extends System.Object implements System_Collections.IComparer, IComparer$1<T> {

        public static get Default(): Comparer$1<T>;

        public static Create ($comparison: System.Comparison$1<T>) : Comparer$1<T>
        public Compare ($x: T, $y: T) : int
    }

    class EqualityComparer$1<T> extends System.Object implements IEqualityComparer$1<T>, System_Collections.IEqualityComparer {

        public static get Default(): EqualityComparer$1<T>;

        public Equals ($x: T, $y: T) : boolean
        public GetHashCode ($obj: T) : int
    }

    interface IAsyncEnumerator$1<T> {

        /**
        * @extension System.Threading.Tasks.TaskAsyncEnumerableExtensions.ConfigureAwait
        */
        ConfigureAwait? ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredAsyncDisposable
    }

    interface IAsyncEnumerable$1<T> {

        /**
        * @extension System.Threading.Tasks.TaskAsyncEnumerableExtensions.ConfigureAwait<T>
        */
        ConfigureAwait? ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredCancelableAsyncEnumerable$1<T>
        /**
        * @extension System.Threading.Tasks.TaskAsyncEnumerableExtensions.WithCancellation<T>
        */
        WithCancellation? ($cancellationToken: System_Threading.CancellationToken) : System_Runtime_CompilerServices.ConfiguredCancelableAsyncEnumerable$1<T>
    }

    interface IReadOnlyDictionary$2<TKey,TValue> {

        /**
        * @extension System.Collections.Generic.CollectionExtensions.GetValueOrDefault<TKey, TValue>
        */
        GetValueOrDefault? ($key: TKey) : TValue
        /**
        * @extension System.Collections.Generic.CollectionExtensions.GetValueOrDefault<TKey, TValue>
        */
        GetValueOrDefault? ($key: TKey, $defaultValue: TValue) : TValue
    }

    interface IDictionary$2<TKey,TValue> {

        /**
        * @extension System.Collections.Generic.CollectionExtensions.TryAdd<TKey, TValue>
        */
        TryAdd? ($key: TKey, $value: TValue) : boolean
        /**
        * @extension System.Collections.Generic.CollectionExtensions.Remove<TKey, TValue>
        */
        Remove? ($key: TKey, $value: $Ref<TValue>) : boolean
    }

}

declare module 'System.Collections' {
    import * as System from 'System'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as System_Globalization from 'System.Globalization'

    interface IEnumerable {

        GetEnumerator? () : IEnumerator
    }

    interface IEnumerator {

        readonly Current? : any

        MoveNext? () : boolean
        Reset? () : void
    }

    interface IList extends ICollection {

        readonly IsReadOnly? : boolean
        readonly IsFixedSize? : boolean

        Add? ($value: any) : int
        Contains? ($value: any) : boolean
        Clear? () : void
        IndexOf? ($value: any) : int
        Insert? ($index: int, $value: any) : void
        Remove? ($value: any) : void
        RemoveAt? ($index: int) : void
        get_Item? ($index: int) : any
        set_Item? ($index: int, $value: any) : void
    }

    interface ICollection extends IEnumerable {

        readonly Count? : int
        readonly SyncRoot? : any
        readonly IsSynchronized? : boolean

        CopyTo? ($array: System.Array, $index: int) : void
    }

    interface IStructuralComparable {

        CompareTo? ($other: any, $comparer: IComparer) : int
    }

    interface IComparer {

        Compare? ($x: any, $y: any) : int
    }

    interface IStructuralEquatable {

        Equals? ($other: any, $comparer: IEqualityComparer) : boolean
        GetHashCode? ($comparer: IEqualityComparer) : int
    }

    interface IEqualityComparer {

        Equals? ($x: any, $y: any) : boolean
        GetHashCode? ($obj: any) : int
    }

    class Comparer extends System.Object implements IComparer, System_Runtime_Serialization.ISerializable {

        public static Default : Comparer
        public static DefaultInvariant : Comparer

        public constructor ($culture: System_Globalization.CultureInfo)
        public GetObjectData ($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext) : void
        public Compare ($a: any, $b: any) : int
    }

    class DictionaryEntry extends System.ValueType {

        public get Key(): any;
        public set Key(value: any);
        public get Value(): any;
        public set Value(value: any);

        public constructor ($key: any, $value: any)
        public Deconstruct ($key: $Ref<any>, $value: $Ref<any>) : void
    }

    interface IDictionary extends ICollection {

        readonly Keys? : ICollection
        readonly Values? : ICollection
        readonly IsReadOnly? : boolean
        readonly IsFixedSize? : boolean

        Contains? ($key: any) : boolean
        Add? ($key: any, $value: any) : void
        Clear? () : void
        GetEnumerator? () : IDictionaryEnumerator
        Remove? ($key: any) : void
        get_Item? ($key: any) : any
        set_Item? ($key: any, $value: any) : void
    }

    interface IDictionaryEnumerator extends IEnumerator {

        readonly Key? : any
        readonly Value? : any
        readonly Entry? : DictionaryEntry

    }

    class CaseInsensitiveComparer extends System.Object implements IComparer {

        public static get Default(): CaseInsensitiveComparer;
        public static get DefaultInvariant(): CaseInsensitiveComparer;

        public constructor ()
        public constructor ($culture: System_Globalization.CultureInfo)
        public Compare ($a: any, $b: any) : int
    }

    class CollectionBase extends System.Object implements IList {

        public get Capacity(): int;
        public set Capacity(value: int);
        public get Count(): int;

        public Clear () : void
        public RemoveAt ($index: int) : void
        public GetEnumerator () : IEnumerator
    }

    class DictionaryBase extends System.Object implements IDictionary {

        public get Count(): int;

        public CopyTo ($array: System.Array, $index: int) : void
        public Clear () : void
        public GetEnumerator () : IDictionaryEnumerator
    }

    class Queue extends System.Object implements ICollection, System.ICloneable {

        public get Count(): int;
        public get IsSynchronized(): boolean;
        public get SyncRoot(): any;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($capacity: int, $growFactor: float)
        public constructor ($col: ICollection)
        public Clone () : any
        public Clear () : void
        public CopyTo ($array: System.Array, $index: int) : void
        public Enqueue ($obj: any) : void
        public GetEnumerator () : IEnumerator
        public Dequeue () : any
        public Peek () : any
        public static Synchronized ($queue: Queue) : Queue
        public Contains ($obj: any) : boolean
        public ToArray () : any[]
        public TrimToSize () : void
    }

    class ReadOnlyCollectionBase extends System.Object implements ICollection {

        public get Count(): int;

        public GetEnumerator () : IEnumerator
    }

    class SortedList extends System.Object implements System.ICloneable, IDictionary {

        public get Capacity(): int;
        public set Capacity(value: int);
        public get Count(): int;
        public get Keys(): ICollection;
        public get Values(): ICollection;
        public get IsReadOnly(): boolean;
        public get IsFixedSize(): boolean;
        public get IsSynchronized(): boolean;
        public get SyncRoot(): any;

        public constructor ()
        public constructor ($initialCapacity: int)
        public constructor ($comparer: IComparer)
        public constructor ($comparer: IComparer, $capacity: int)
        public constructor ($d: IDictionary)
        public constructor ($d: IDictionary, $comparer: IComparer)
        public Add ($key: any, $value: any) : void
        public Clear () : void
        public Clone () : any
        public Contains ($key: any) : boolean
        public ContainsKey ($key: any) : boolean
        public ContainsValue ($value: any) : boolean
        public CopyTo ($array: System.Array, $arrayIndex: int) : void
        public GetByIndex ($index: int) : any
        public GetEnumerator () : IDictionaryEnumerator
        public GetKey ($index: int) : any
        public GetKeyList () : IList
        public GetValueList () : IList
        public IndexOfKey ($key: any) : int
        public IndexOfValue ($value: any) : int
        public RemoveAt ($index: int) : void
        public Remove ($key: any) : void
        public SetByIndex ($index: int, $value: any) : void
        public static Synchronized ($list: SortedList) : SortedList
        public TrimToSize () : void
        public get_Item ($key: any) : any
        public set_Item ($key: any, $value: any) : void
    }

    class Stack extends System.Object implements ICollection, System.ICloneable {

        public get Count(): int;
        public get IsSynchronized(): boolean;
        public get SyncRoot(): any;

        public constructor ()
        public constructor ($initialCapacity: int)
        public constructor ($col: ICollection)
        public Clear () : void
        public Clone () : any
        public Contains ($obj: any) : boolean
        public CopyTo ($array: System.Array, $index: int) : void
        public GetEnumerator () : IEnumerator
        public Peek () : any
        public Pop () : any
        public Push ($obj: any) : void
        public static Synchronized ($stack: Stack) : Stack
        public ToArray () : any[]
    }

    class BitArray extends System.Object implements ICollection, System.ICloneable {

        public get Length(): int;
        public set Length(value: int);
        public get Count(): int;
        public get SyncRoot(): any;
        public get IsSynchronized(): boolean;
        public get IsReadOnly(): boolean;

        public constructor ($length: int)
        public constructor ($length: int, $defaultValue: boolean)
        public constructor ($bytes: byte[])
        public constructor ($values: boolean[])
        public constructor ($values: int[])
        public constructor ($bits: BitArray)
        public Get ($index: int) : boolean
        public Set ($index: int, $value: boolean) : void
        public SetAll ($value: boolean) : void
        public And ($value: BitArray) : BitArray
        public Or ($value: BitArray) : BitArray
        public Xor ($value: BitArray) : BitArray
        public Not () : BitArray
        public RightShift ($count: int) : BitArray
        public LeftShift ($count: int) : BitArray
        public CopyTo ($array: System.Array, $index: int) : void
        public Clone () : any
        public GetEnumerator () : IEnumerator
        public get_Item ($index: int) : boolean
        public set_Item ($index: int, $value: boolean) : void
    }

    class StructuralComparisons {

        public static get StructuralComparer(): IComparer;
        public static get StructuralEqualityComparer(): IEqualityComparer;

    }

    class ArrayList extends System.Object implements System.ICloneable, IList {

        public get Capacity(): int;
        public set Capacity(value: int);
        public get Count(): int;
        public get IsFixedSize(): boolean;
        public get IsReadOnly(): boolean;
        public get IsSynchronized(): boolean;
        public get SyncRoot(): any;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($c: ICollection)
        public static Adapter ($list: IList) : ArrayList
        public Add ($value: any) : int
        public AddRange ($c: ICollection) : void
        /**
        * @methodSwap BinarySearch_EBB7509C_AEC4A3D
        */
        public BinarySearch ($index: int, $count: int, $value: any, $comparer: IComparer) : int
        public BinarySearch ($value: any) : int
        public BinarySearch ($value: any, $comparer: IComparer) : int
        public Clear () : void
        public Clone () : any
        public Contains ($item: any) : boolean
        public CopyTo ($array: System.Array) : void
        /**
        * @methodSwap CopyTo_EBB7509C_H9678F578
        */
        public CopyTo ($array: System.Array, $arrayIndex: int) : void
        /**
        * @methodSwap CopyTo_EBB7509C_H4C639E34
        */
        public CopyTo ($index: int, $array: System.Array, $arrayIndex: int, $count: int) : void
        public static FixedSize ($list: IList) : IList
        public static FixedSize ($list: ArrayList) : ArrayList
        public GetEnumerator () : IEnumerator
        /**
        * @methodSwap GetEnumerator_EBB7509C_H2CFB2EE5
        */
        public GetEnumerator ($index: int, $count: int) : IEnumerator
        public IndexOf ($value: any) : int
        /**
        * @methodSwap IndexOf_EBB7509C_H19DDFA96
        */
        public IndexOf ($value: any, $startIndex: int) : int
        /**
        * @methodSwap IndexOf_EBB7509C_A9B137C9
        */
        public IndexOf ($value: any, $startIndex: int, $count: int) : int
        public Insert ($index: int, $value: any) : void
        public InsertRange ($index: int, $c: ICollection) : void
        public LastIndexOf ($value: any) : int
        /**
        * @methodSwap LastIndexOf_EBB7509C_H19DDFA96
        */
        public LastIndexOf ($value: any, $startIndex: int) : int
        /**
        * @methodSwap LastIndexOf_EBB7509C_A9B137C9
        */
        public LastIndexOf ($value: any, $startIndex: int, $count: int) : int
        public static ReadOnly ($list: IList) : IList
        public static ReadOnly ($list: ArrayList) : ArrayList
        public Remove ($obj: any) : void
        public RemoveAt ($index: int) : void
        public RemoveRange ($index: int, $count: int) : void
        public static Repeat ($value: any, $count: int) : ArrayList
        public Reverse () : void
        /**
        * @methodSwap Reverse_EBB7509C_H2CFB2EE5
        */
        public Reverse ($index: int, $count: int) : void
        public SetRange ($index: int, $c: ICollection) : void
        public GetRange ($index: int, $count: int) : ArrayList
        public Sort () : void
        public Sort ($comparer: IComparer) : void
        /**
        * @methodSwap Sort_EBB7509C_BB3B861
        */
        public Sort ($index: int, $count: int, $comparer: IComparer) : void
        public static Synchronized ($list: IList) : IList
        public static Synchronized ($list: ArrayList) : ArrayList
        public ToArray () : any[]
        public ToArray ($type: System.Type) : System.Array
        public TrimToSize () : void
        public get_Item ($index: int) : any
        public set_Item ($index: int, $value: any) : void
    }

    class Hashtable extends System.Object implements System.ICloneable, IDictionary, System_Runtime_Serialization.IDeserializationCallback, System_Runtime_Serialization.ISerializable {

        public get IsReadOnly(): boolean;
        public get IsFixedSize(): boolean;
        public get IsSynchronized(): boolean;
        public get Keys(): ICollection;
        public get Values(): ICollection;
        public get SyncRoot(): any;
        public get Count(): int;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($capacity: int, $loadFactor: float)
        public constructor ($capacity: int, $loadFactor: float, $equalityComparer: IEqualityComparer)
        public constructor ($equalityComparer: IEqualityComparer)
        public constructor ($capacity: int, $equalityComparer: IEqualityComparer)
        public constructor ($d: IDictionary)
        public constructor ($d: IDictionary, $loadFactor: float)
        public constructor ($d: IDictionary, $equalityComparer: IEqualityComparer)
        public constructor ($d: IDictionary, $loadFactor: float, $equalityComparer: IEqualityComparer)
        public Add ($key: any, $value: any) : void
        public Clear () : void
        public Clone () : any
        public Contains ($key: any) : boolean
        public ContainsKey ($key: any) : boolean
        public ContainsValue ($value: any) : boolean
        public CopyTo ($array: System.Array, $arrayIndex: int) : void
        public GetEnumerator () : IDictionaryEnumerator
        public Remove ($key: any) : void
        public static Synchronized ($table: Hashtable) : Hashtable
        public GetObjectData ($info: System_Runtime_Serialization.SerializationInfo, $context: System_Runtime_Serialization.StreamingContext) : void
        public OnDeserialization ($sender: any) : void
        public get_Item ($key: any) : any
        public set_Item ($key: any, $value: any) : void
    }

}

declare module 'System.Threading' {
    import * as System from 'System'

    interface WaitHandle extends System.IDisposable {

    }

    interface CancellationToken {

    }

    enum LazyThreadSafetyMode {
        None = 0,
        PublicationOnly = 1,
        ExecutionAndPublication = 2 
    }

}

declare module 'System.ArraySegment$1' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class Enumerator<T> extends System.ValueType implements System_Collections_Generic.IEnumerator$1<T> {

        public get Current(): T;

        public MoveNext () : boolean
        public Dispose () : void
    }

}

declare module 'System.Threading.Tasks' {
    import * as System from 'System'
    import * as System_Threading_Tasks_Sources from 'System.Threading.Tasks.Sources'
    import * as System_Runtime_CompilerServices from 'System.Runtime.CompilerServices'
    import * as System_Threading from 'System.Threading'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Collections_Concurrent from 'System.Collections.Concurrent'

    class ValueTask extends System.ValueType implements System.IEquatable$1<ValueTask> {

        public get IsCompleted(): boolean;
        public get IsCompletedSuccessfully(): boolean;
        public get IsFaulted(): boolean;
        public get IsCanceled(): boolean;

        public constructor ($task: Task)
        public constructor ($source: System_Threading_Tasks_Sources.IValueTaskSource, $token: short)
        public GetHashCode () : int
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTask) : boolean
        public AsTask () : Task
        public Preserve () : ValueTask
        public GetAwaiter () : System_Runtime_CompilerServices.ValueTaskAwaiter
        public ConfigureAwait ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredValueTaskAwaitable
        public static op_Equality ($left: ValueTask, $right: ValueTask) : boolean
        public static op_Inequality ($left: ValueTask, $right: ValueTask) : boolean
    }

    class Task extends System.Object implements System.IAsyncResult, System_Threading.IThreadPoolWorkItem, System.IDisposable {

        public get Id(): int;
        public static get CurrentId(): System.Nullable$1<int>;
        public get Exception(): System.AggregateException;
        public get Status(): TaskStatus;
        public get IsCanceled(): boolean;
        public get IsCompleted(): boolean;
        public get IsCompletedSuccessfully(): boolean;
        public get CreationOptions(): TaskCreationOptions;
        public get AsyncState(): any;
        public static get Factory(): TaskFactory;
        public static get CompletedTask(): Task;
        public get IsFaulted(): boolean;

        public constructor ($action: System.Action)
        public constructor ($action: System.Action, $cancellationToken: System_Threading.CancellationToken)
        public constructor ($action: System.Action, $creationOptions: TaskCreationOptions)
        public constructor ($action: System.Action, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions)
        public constructor ($action: System.Action$1<any>, $state: any)
        public constructor ($action: System.Action$1<any>, $state: any, $cancellationToken: System_Threading.CancellationToken)
        public constructor ($action: System.Action$1<any>, $state: any, $creationOptions: TaskCreationOptions)
        public constructor ($action: System.Action$1<any>, $state: any, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions)
        public Start () : void
        public Start ($scheduler: TaskScheduler) : void
        public RunSynchronously () : void
        public RunSynchronously ($scheduler: TaskScheduler) : void
        public Dispose () : void
        public GetAwaiter () : System_Runtime_CompilerServices.TaskAwaiter
        public ConfigureAwait ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredTaskAwaitable
        public static Yield () : System_Runtime_CompilerServices.YieldAwaitable
        public Wait () : void
        public Wait ($timeout: System.TimeSpan) : boolean
        public Wait ($cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @methodSwap Wait_EBB7509C_F92D023A
        */
        public Wait ($millisecondsTimeout: int) : boolean
        /**
        * @methodSwap Wait_EBB7509C_E2281827
        */
        public Wait ($millisecondsTimeout: int, $cancellationToken: System_Threading.CancellationToken) : boolean
        public ContinueWith ($continuationAction: System.Action$1<Task>) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public static WaitAll (...tasks: Task[]) : void
        public static WaitAll ($tasks: Task[], $timeout: System.TimeSpan) : boolean
        /**
        * @methodSwap WaitAll_EBB7509C_H7F971962
        */
        public static WaitAll ($tasks: Task[], $millisecondsTimeout: int) : boolean
        public static WaitAll ($tasks: Task[], $cancellationToken: System_Threading.CancellationToken) : void
        /**
        * @methodSwap WaitAll_EBB7509C_H6F12755F
        */
        public static WaitAll ($tasks: Task[], $millisecondsTimeout: int, $cancellationToken: System_Threading.CancellationToken) : boolean
        public static WaitAny (...tasks: Task[]) : int
        public static WaitAny ($tasks: Task[], $timeout: System.TimeSpan) : int
        public static WaitAny ($tasks: Task[], $cancellationToken: System_Threading.CancellationToken) : int
        /**
        * @methodSwap WaitAny_EBB7509C_H7F971962
        */
        public static WaitAny ($tasks: Task[], $millisecondsTimeout: int) : int
        /**
        * @methodSwap WaitAny_EBB7509C_H6F12755F
        */
        public static WaitAny ($tasks: Task[], $millisecondsTimeout: int, $cancellationToken: System_Threading.CancellationToken) : int
        public static FromResult<TResult> ($result: TResult) : Task$1<TResult>
        public static FromException ($exception: System.Exception) : Task
        public static FromException<TResult> ($exception: System.Exception) : Task$1<TResult>
        public static FromCanceled ($cancellationToken: System_Threading.CancellationToken) : Task
        public static FromCanceled<TResult> ($cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public static Run ($action: System.Action) : Task
        public static Run ($action: System.Action, $cancellationToken: System_Threading.CancellationToken) : Task
        public static Run<TResult> ($function: System.Func$1<TResult>) : Task$1<TResult>
        public static Run<TResult> ($function: System.Func$1<TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public static Run ($function: System.Func$1<Task>) : Task
        public static Run ($function: System.Func$1<Task>, $cancellationToken: System_Threading.CancellationToken) : Task
        public static Delay ($delay: System.TimeSpan) : Task
        public static Delay ($delay: System.TimeSpan, $cancellationToken: System_Threading.CancellationToken) : Task
        /**
        * @methodSwap Delay_EBB7509C_F92D023A
        */
        public static Delay ($millisecondsDelay: int) : Task
        /**
        * @methodSwap Delay_EBB7509C_E2281827
        */
        public static Delay ($millisecondsDelay: int, $cancellationToken: System_Threading.CancellationToken) : Task
        public static WhenAll ($tasks: System_Collections_Generic.IEnumerable$1<Task>) : Task
        public static WhenAll (...tasks: Task[]) : Task
        public static WhenAll<TResult> ($tasks: System_Collections_Generic.IEnumerable$1<Task$1<TResult>>) : Task$1<TResult[]>
        public static WhenAll<TResult> (...tasks: Task$1<TResult>[]) : Task$1<TResult[]>
        public static WhenAny (...tasks: Task[]) : Task$1<Task>
        public static WhenAny ($tasks: System_Collections_Generic.IEnumerable$1<Task>) : Task$1<Task>
        public static WhenAny<TResult> (...tasks: Task$1<TResult>[]) : Task$1<Task$1<TResult>>
        public static WhenAny<TResult> ($tasks: System_Collections_Generic.IEnumerable$1<Task$1<TResult>>) : Task$1<Task$1<TResult>>
        public static CreateUnwrapPromise<TResult> ($outerTask: Task, $lookForOce: boolean) : Task$1<TResult>
    }

    class TaskScheduler extends System.Object {

        public get MaximumConcurrencyLevel(): int;
        public static get Default(): TaskScheduler;
        public static get Current(): TaskScheduler;
        public get Id(): int;

        public static FromCurrentSynchronizationContext () : TaskScheduler
        public static add_UnobservedTaskException ($value: System.EventHandler$1<UnobservedTaskExceptionEventArgs>) : void
        public static remove_UnobservedTaskException ($value: System.EventHandler$1<UnobservedTaskExceptionEventArgs>) : void
    }

    class UnobservedTaskExceptionEventArgs extends System.EventArgs {

        public static Empty : EventArgs
        public get Observed(): boolean;
        public get Exception(): System.AggregateException;

        public constructor ($exception: System.AggregateException)
        public SetObserved () : void
        public constructor ()
    }

    enum TaskContinuationOptions {
        None = 0,
        PreferFairness = 1,
        LongRunning = 2,
        AttachedToParent = 4,
        DenyChildAttach = 8,
        HideScheduler = 16,
        LazyCancellation = 32,
        RunContinuationsAsynchronously = 64,
        NotOnRanToCompletion = 65536,
        NotOnFaulted = 131072,
        NotOnCanceled = 262144,
        OnlyOnRanToCompletion = 393216,
        OnlyOnFaulted = 327680,
        OnlyOnCanceled = 196608,
        ExecuteSynchronously = 524288 
    }

    class Task$1<TResult> extends Task {

        public get Id(): int;
        public static get CurrentId(): System.Nullable$1<int>;
        public get Exception(): System.AggregateException;
        public get Status(): TaskStatus;
        public get IsCanceled(): boolean;
        public get IsCompleted(): boolean;
        public get IsCompletedSuccessfully(): boolean;
        public get CreationOptions(): TaskCreationOptions;
        public get AsyncState(): any;
        public static get Factory(): TaskFactory;
        public static get CompletedTask(): Task;
        public get IsFaulted(): boolean;
        public get Result(): TResult;

        public constructor ($function: System.Func$1<TResult>)
        public constructor ($function: System.Func$1<TResult>, $cancellationToken: System_Threading.CancellationToken)
        public constructor ($function: System.Func$1<TResult>, $creationOptions: TaskCreationOptions)
        public constructor ($function: System.Func$1<TResult>, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions)
        public constructor ($function: System.Func$2<any, TResult>, $state: any)
        public constructor ($function: System.Func$2<any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken)
        public constructor ($function: System.Func$2<any, TResult>, $state: any, $creationOptions: TaskCreationOptions)
        public constructor ($function: System.Func$2<any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions)
        public GetAwaiter () : System_Runtime_CompilerServices.TaskAwaiter$1<TResult>
        public ConfigureAwait ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredTaskAwaitable$1<TResult>
        public ContinueWith ($continuationAction: System.Action$1<Task$1<TResult>>) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task$1<TResult>>, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task$1<TResult>>, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task$1<TResult>>, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task$1<TResult>>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task$1<TResult>, any>, $state: any) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task$1<TResult>, any>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task$1<TResult>, any>, $state: any, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task$1<TResult>, any>, $state: any, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task$1<TResult>, any>, $state: any, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$2<Task$1<TResult>, TNewResult>) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$2<Task$1<TResult>, TNewResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$2<Task$1<TResult>, TNewResult>, $scheduler: TaskScheduler) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$2<Task$1<TResult>, TNewResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$2<Task$1<TResult>, TNewResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$3<Task$1<TResult>, any, TNewResult>, $state: any) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$3<Task$1<TResult>, any, TNewResult>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$3<Task$1<TResult>, any, TNewResult>, $state: any, $scheduler: TaskScheduler) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$3<Task$1<TResult>, any, TNewResult>, $state: any, $continuationOptions: TaskContinuationOptions) : Task$1<TNewResult>
        public ContinueWith<TNewResult> ($continuationFunction: System.Func$3<Task$1<TResult>, any, TNewResult>, $state: any, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TNewResult>
        public constructor ($action: System.Action)
        public constructor ($action: System.Action, $cancellationToken: System_Threading.CancellationToken)
        public constructor ($action: System.Action, $creationOptions: TaskCreationOptions)
        public constructor ($action: System.Action, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions)
        public constructor ($action: System.Action$1<any>, $state: any)
        public constructor ($action: System.Action$1<any>, $state: any, $cancellationToken: System_Threading.CancellationToken)
        public constructor ($action: System.Action$1<any>, $state: any, $creationOptions: TaskCreationOptions)
        public constructor ($action: System.Action$1<any>, $state: any, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions)
        public GetAwaiter () : System_Runtime_CompilerServices.TaskAwaiter
        public ConfigureAwait ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredTaskAwaitable
        public ContinueWith ($continuationAction: System.Action$1<Task>) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWith ($continuationAction: System.Action$1<Task>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $scheduler: TaskScheduler) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWith ($continuationAction: System.Action$2<Task, any>, $state: any, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWith<TResult> ($continuationFunction: System.Func$3<Task, any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
    }

    enum TaskCreationOptions {
        None = 0,
        PreferFairness = 1,
        LongRunning = 2,
        AttachedToParent = 4,
        DenyChildAttach = 8,
        HideScheduler = 16,
        RunContinuationsAsynchronously = 64 
    }

    class TaskFactory$1<TResult> extends System.Object {

        public get CancellationToken(): System_Threading.CancellationToken;
        public get Scheduler(): TaskScheduler;
        public get CreationOptions(): TaskCreationOptions;
        public get ContinuationOptions(): TaskContinuationOptions;

        public constructor ()
        public constructor ($cancellationToken: System_Threading.CancellationToken)
        public constructor ($scheduler: TaskScheduler)
        public constructor ($creationOptions: TaskCreationOptions, $continuationOptions: TaskContinuationOptions)
        public constructor ($cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler)
        public StartNew ($function: System.Func$1<TResult>) : Task$1<TResult>
        public StartNew ($function: System.Func$1<TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public StartNew ($function: System.Func$1<TResult>, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public StartNew ($function: System.Func$1<TResult>, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public StartNew ($function: System.Func$2<any, TResult>, $state: any) : Task$1<TResult>
        public StartNew ($function: System.Func$2<any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public StartNew ($function: System.Func$2<any, TResult>, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public StartNew ($function: System.Func$2<any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public FromAsync ($asyncResult: System.IAsyncResult, $endMethod: System.Func$2<System.IAsyncResult, TResult>) : Task$1<TResult>
        public FromAsync ($asyncResult: System.IAsyncResult, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync ($asyncResult: System.IAsyncResult, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public FromAsync ($beginMethod: System.Func$3<System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $state: any) : Task$1<TResult>
        public FromAsync ($beginMethod: System.Func$3<System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync<TArg1> ($beginMethod: System.Func$4<TArg1, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $state: any) : Task$1<TResult>
        public FromAsync<TArg1> ($beginMethod: System.Func$4<TArg1, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync<TArg1,TArg2> ($beginMethod: System.Func$5<TArg1, TArg2, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $state: any) : Task$1<TResult>
        public FromAsync<TArg1,TArg2> ($beginMethod: System.Func$5<TArg1, TArg2, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync<TArg1,TArg2,TArg3> ($beginMethod: System.Func$6<TArg1, TArg2, TArg3, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $arg3: TArg3, $state: any) : Task$1<TResult>
        public FromAsync<TArg1,TArg2,TArg3> ($beginMethod: System.Func$6<TArg1, TArg2, TArg3, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $arg3: TArg3, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public ContinueWhenAll ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>) : Task$1<TResult>
        public ContinueWhenAll ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAll ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAll ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWhenAny ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>) : Task$1<TResult>
        public ContinueWhenAny ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAny ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAny ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
    }

    enum TaskStatus {
        Created = 0,
        WaitingForActivation = 1,
        WaitingToRun = 2,
        Running = 3,
        WaitingForChildrenToComplete = 4,
        RanToCompletion = 5,
        Canceled = 6,
        Faulted = 7 
    }

    class TaskFactory extends System.Object {

        public get CancellationToken(): System_Threading.CancellationToken;
        public get Scheduler(): TaskScheduler;
        public get CreationOptions(): TaskCreationOptions;
        public get ContinuationOptions(): TaskContinuationOptions;

        public constructor ()
        public constructor ($cancellationToken: System_Threading.CancellationToken)
        public constructor ($scheduler: TaskScheduler)
        public constructor ($creationOptions: TaskCreationOptions, $continuationOptions: TaskContinuationOptions)
        public constructor ($cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler)
        public StartNew ($action: System.Action) : Task
        public StartNew ($action: System.Action, $cancellationToken: System_Threading.CancellationToken) : Task
        public StartNew ($action: System.Action, $creationOptions: TaskCreationOptions) : Task
        public StartNew ($action: System.Action, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task
        public StartNew ($action: System.Action$1<any>, $state: any) : Task
        public StartNew ($action: System.Action$1<any>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task
        public StartNew ($action: System.Action$1<any>, $state: any, $creationOptions: TaskCreationOptions) : Task
        public StartNew ($action: System.Action$1<any>, $state: any, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task
        public StartNew<TResult> ($function: System.Func$1<TResult>) : Task$1<TResult>
        public StartNew<TResult> ($function: System.Func$1<TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public StartNew<TResult> ($function: System.Func$1<TResult>, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public StartNew<TResult> ($function: System.Func$1<TResult>, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public StartNew<TResult> ($function: System.Func$2<any, TResult>, $state: any) : Task$1<TResult>
        public StartNew<TResult> ($function: System.Func$2<any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public StartNew<TResult> ($function: System.Func$2<any, TResult>, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public StartNew<TResult> ($function: System.Func$2<any, TResult>, $state: any, $cancellationToken: System_Threading.CancellationToken, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public FromAsync ($asyncResult: System.IAsyncResult, $endMethod: System.Action$1<System.IAsyncResult>) : Task
        public FromAsync ($asyncResult: System.IAsyncResult, $endMethod: System.Action$1<System.IAsyncResult>, $creationOptions: TaskCreationOptions) : Task
        public FromAsync ($asyncResult: System.IAsyncResult, $endMethod: System.Action$1<System.IAsyncResult>, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task
        public FromAsync ($beginMethod: System.Func$3<System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $state: any) : Task
        public FromAsync ($beginMethod: System.Func$3<System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $state: any, $creationOptions: TaskCreationOptions) : Task
        public FromAsync<TArg1> ($beginMethod: System.Func$4<TArg1, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $arg1: TArg1, $state: any) : Task
        public FromAsync<TArg1> ($beginMethod: System.Func$4<TArg1, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $arg1: TArg1, $state: any, $creationOptions: TaskCreationOptions) : Task
        public FromAsync<TArg1,TArg2> ($beginMethod: System.Func$5<TArg1, TArg2, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $arg1: TArg1, $arg2: TArg2, $state: any) : Task
        public FromAsync<TArg1,TArg2> ($beginMethod: System.Func$5<TArg1, TArg2, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $arg1: TArg1, $arg2: TArg2, $state: any, $creationOptions: TaskCreationOptions) : Task
        public FromAsync<TArg1,TArg2,TArg3> ($beginMethod: System.Func$6<TArg1, TArg2, TArg3, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $arg1: TArg1, $arg2: TArg2, $arg3: TArg3, $state: any) : Task
        public FromAsync<TArg1,TArg2,TArg3> ($beginMethod: System.Func$6<TArg1, TArg2, TArg3, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Action$1<System.IAsyncResult>, $arg1: TArg1, $arg2: TArg2, $arg3: TArg3, $state: any, $creationOptions: TaskCreationOptions) : Task
        public FromAsync<TResult> ($asyncResult: System.IAsyncResult, $endMethod: System.Func$2<System.IAsyncResult, TResult>) : Task$1<TResult>
        public FromAsync<TResult> ($asyncResult: System.IAsyncResult, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync<TResult> ($asyncResult: System.IAsyncResult, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $creationOptions: TaskCreationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public FromAsync<TResult> ($beginMethod: System.Func$3<System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $state: any) : Task$1<TResult>
        public FromAsync<TResult> ($beginMethod: System.Func$3<System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync<TArg1,TResult> ($beginMethod: System.Func$4<TArg1, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $state: any) : Task$1<TResult>
        public FromAsync<TArg1,TResult> ($beginMethod: System.Func$4<TArg1, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync<TArg1,TArg2,TResult> ($beginMethod: System.Func$5<TArg1, TArg2, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $state: any) : Task$1<TResult>
        public FromAsync<TArg1,TArg2,TResult> ($beginMethod: System.Func$5<TArg1, TArg2, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public FromAsync<TArg1,TArg2,TArg3,TResult> ($beginMethod: System.Func$6<TArg1, TArg2, TArg3, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $arg3: TArg3, $state: any) : Task$1<TResult>
        public FromAsync<TArg1,TArg2,TArg3,TResult> ($beginMethod: System.Func$6<TArg1, TArg2, TArg3, System.AsyncCallback, any, System.IAsyncResult>, $endMethod: System.Func$2<System.IAsyncResult, TResult>, $arg1: TArg1, $arg2: TArg2, $arg3: TArg3, $state: any, $creationOptions: TaskCreationOptions) : Task$1<TResult>
        public ContinueWhenAll ($tasks: Task[], $continuationAction: System.Action$1<Task[]>) : Task
        public ContinueWhenAll ($tasks: Task[], $continuationAction: System.Action$1<Task[]>, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWhenAll ($tasks: Task[], $continuationAction: System.Action$1<Task[]>, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWhenAll ($tasks: Task[], $continuationAction: System.Action$1<Task[]>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>[]>) : Task
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>[]>, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>[]>, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWhenAll<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>[]>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWhenAll<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>) : Task$1<TResult>
        public ContinueWhenAll<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAll<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAll<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task[], TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAll<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>[], TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWhenAny ($tasks: Task[], $continuationAction: System.Action$1<Task>) : Task
        public ContinueWhenAny ($tasks: Task[], $continuationAction: System.Action$1<Task>, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWhenAny ($tasks: Task[], $continuationAction: System.Action$1<Task>, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWhenAny ($tasks: Task[], $continuationAction: System.Action$1<Task>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
        public ContinueWhenAny<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>) : Task$1<TResult>
        public ContinueWhenAny<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAny<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAny<TResult> ($tasks: Task[], $continuationFunction: System.Func$2<Task, TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>, $cancellationToken: System_Threading.CancellationToken) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>, $continuationOptions: TaskContinuationOptions) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult,TResult> ($tasks: Task$1<TAntecedentResult>[], $continuationFunction: System.Func$2<Task$1<TAntecedentResult>, TResult>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task$1<TResult>
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>>) : Task
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>>, $cancellationToken: System_Threading.CancellationToken) : Task
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>>, $continuationOptions: TaskContinuationOptions) : Task
        public ContinueWhenAny<TAntecedentResult> ($tasks: Task$1<TAntecedentResult>[], $continuationAction: System.Action$1<Task$1<TAntecedentResult>>, $cancellationToken: System_Threading.CancellationToken, $continuationOptions: TaskContinuationOptions, $scheduler: TaskScheduler) : Task
    }

    class TaskCanceledException extends System.OperationCanceledException {

        public get Task(): Task;

        public constructor ()
        public constructor ($message: string)
        public constructor ($message: string, $innerException: System.Exception)
        public constructor ($message: string, $innerException: System.Exception, $token: System_Threading.CancellationToken)
        public constructor ($task: Task)
    }

    class TaskCompletionSource$1<TResult> extends System.Object {

        public get Task(): Task$1<TResult>;

        public constructor ()
        public constructor ($creationOptions: TaskCreationOptions)
        public constructor ($state: any)
        public constructor ($state: any, $creationOptions: TaskCreationOptions)
        public TrySetException ($exception: System.Exception) : boolean
        public TrySetException ($exceptions: System_Collections_Generic.IEnumerable$1<System.Exception>) : boolean
        public SetException ($exception: System.Exception) : void
        public SetException ($exceptions: System_Collections_Generic.IEnumerable$1<System.Exception>) : void
        public TrySetResult ($result: TResult) : boolean
        public SetResult ($result: TResult) : void
        public TrySetCanceled () : boolean
        public TrySetCanceled ($cancellationToken: System_Threading.CancellationToken) : boolean
        public SetCanceled () : void
    }

    class TaskSchedulerException extends System.Exception {

        public constructor ()
        public constructor ($message: string)
        public constructor ($innerException: System.Exception)
        public constructor ($message: string, $innerException: System.Exception)
    }

    class ValueTask$1<TResult> extends System.ValueType implements System.IEquatable$1<ValueTask$1<TResult>> {

        public get IsCompleted(): boolean;
        public get IsCompletedSuccessfully(): boolean;
        public get IsFaulted(): boolean;
        public get IsCanceled(): boolean;
        public get Result(): TResult;

        public constructor ($result: TResult)
        public constructor ($task: Task$1<TResult>)
        public constructor ($source: System_Threading_Tasks_Sources.IValueTaskSource$1<TResult>, $token: short)
        public GetHashCode () : int
        public Equals ($obj: any) : boolean
        public Equals ($other: ValueTask$1<TResult>) : boolean
        public AsTask () : Task$1<TResult>
        public Preserve () : ValueTask$1<TResult>
        public GetAwaiter () : System_Runtime_CompilerServices.ValueTaskAwaiter$1<TResult>
        public ConfigureAwait ($continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredValueTaskAwaitable$1<TResult>
        public ToString () : string
    }

    class ParallelOptions extends System.Object {

        public get TaskScheduler(): TaskScheduler;
        public set TaskScheduler(value: TaskScheduler);
        public get MaxDegreeOfParallelism(): int;
        public set MaxDegreeOfParallelism(value: int);
        public get CancellationToken(): System_Threading.CancellationToken;
        public set CancellationToken(value: System_Threading.CancellationToken);

        public constructor ()
    }

    class Parallel {

        public static Invoke (...actions: System.Action[]) : void
        public static Invoke ($parallelOptions: ParallelOptions, ...actions: System.Action[]) : void
        /**
        * @methodSwap For_EBB7509C_CA2C730C
        */
        public static For ($fromInclusive: int, $toExclusive: int, $body: System.Action$1<int>) : ParallelLoopResult
        public static For ($fromInclusive: bigint, $toExclusive: bigint, $body: System.Action$1<bigint>) : ParallelLoopResult
        /**
        * @methodSwap For_EBB7509C_H50208082
        */
        public static For ($fromInclusive: int, $toExclusive: int, $parallelOptions: ParallelOptions, $body: System.Action$1<int>) : ParallelLoopResult
        public static For ($fromInclusive: bigint, $toExclusive: bigint, $parallelOptions: ParallelOptions, $body: System.Action$1<bigint>) : ParallelLoopResult
        /**
        * @methodSwap For_EBB7509C_A510B820
        */
        public static For ($fromInclusive: int, $toExclusive: int, $body: System.Action$2<int, ParallelLoopState>) : ParallelLoopResult
        public static For ($fromInclusive: bigint, $toExclusive: bigint, $body: System.Action$2<bigint, ParallelLoopState>) : ParallelLoopResult
        /**
        * @methodSwap For_EBB7509C_H3780B6B6
        */
        public static For ($fromInclusive: int, $toExclusive: int, $parallelOptions: ParallelOptions, $body: System.Action$2<int, ParallelLoopState>) : ParallelLoopResult
        public static For ($fromInclusive: bigint, $toExclusive: bigint, $parallelOptions: ParallelOptions, $body: System.Action$2<bigint, ParallelLoopState>) : ParallelLoopResult
        /**
        * @methodSwap For_EBB7509C_A9BA9300
        */
        public static For<TLocal> ($fromInclusive: int, $toExclusive: int, $localInit: System.Func$1<TLocal>, $body: System.Func$4<int, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static For<TLocal> ($fromInclusive: bigint, $toExclusive: bigint, $localInit: System.Func$1<TLocal>, $body: System.Func$4<bigint, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        /**
        * @methodSwap For_EBB7509C_H33B75E0A
        */
        public static For<TLocal> ($fromInclusive: int, $toExclusive: int, $parallelOptions: ParallelOptions, $localInit: System.Func$1<TLocal>, $body: System.Func$4<int, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static For<TLocal> ($fromInclusive: bigint, $toExclusive: bigint, $parallelOptions: ParallelOptions, $localInit: System.Func$1<TLocal>, $body: System.Func$4<bigint, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $body: System.Action$1<TSource>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $parallelOptions: ParallelOptions, $body: System.Action$1<TSource>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $body: System.Action$2<TSource, ParallelLoopState>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $parallelOptions: ParallelOptions, $body: System.Action$2<TSource, ParallelLoopState>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $body: System.Action$3<TSource, ParallelLoopState, bigint>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $parallelOptions: ParallelOptions, $body: System.Action$3<TSource, ParallelLoopState, bigint>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $localInit: System.Func$1<TLocal>, $body: System.Func$4<TSource, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $parallelOptions: ParallelOptions, $localInit: System.Func$1<TLocal>, $body: System.Func$4<TSource, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $localInit: System.Func$1<TLocal>, $body: System.Func$5<TSource, ParallelLoopState, bigint, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Generic.IEnumerable$1<TSource>, $parallelOptions: ParallelOptions, $localInit: System.Func$1<TLocal>, $body: System.Func$5<TSource, ParallelLoopState, bigint, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Concurrent.Partitioner$1<TSource>, $body: System.Action$1<TSource>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Concurrent.Partitioner$1<TSource>, $body: System.Action$2<TSource, ParallelLoopState>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Concurrent.OrderablePartitioner$1<TSource>, $body: System.Action$3<TSource, ParallelLoopState, bigint>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Concurrent.Partitioner$1<TSource>, $localInit: System.Func$1<TLocal>, $body: System.Func$4<TSource, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Concurrent.OrderablePartitioner$1<TSource>, $localInit: System.Func$1<TLocal>, $body: System.Func$5<TSource, ParallelLoopState, bigint, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Concurrent.Partitioner$1<TSource>, $parallelOptions: ParallelOptions, $body: System.Action$1<TSource>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Concurrent.Partitioner$1<TSource>, $parallelOptions: ParallelOptions, $body: System.Action$2<TSource, ParallelLoopState>) : ParallelLoopResult
        public static ForEach<TSource> ($source: System_Collections_Concurrent.OrderablePartitioner$1<TSource>, $parallelOptions: ParallelOptions, $body: System.Action$3<TSource, ParallelLoopState, bigint>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Concurrent.Partitioner$1<TSource>, $parallelOptions: ParallelOptions, $localInit: System.Func$1<TLocal>, $body: System.Func$4<TSource, ParallelLoopState, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
        public static ForEach<TSource,TLocal> ($source: System_Collections_Concurrent.OrderablePartitioner$1<TSource>, $parallelOptions: ParallelOptions, $localInit: System.Func$1<TLocal>, $body: System.Func$5<TSource, ParallelLoopState, bigint, TLocal, TLocal>, $localFinally: System.Action$1<TLocal>) : ParallelLoopResult
    }

    class ParallelLoopResult extends System.ValueType {

        public get IsCompleted(): boolean;
        public get LowestBreakIteration(): System.Nullable$1<bigint>;

    }

    class ParallelLoopState extends System.Object {

        public get ShouldExitCurrentIteration(): boolean;
        public get IsStopped(): boolean;
        public get IsExceptional(): boolean;
        public get LowestBreakIteration(): System.Nullable$1<bigint>;

        public Stop () : void
        public Break () : void
    }

    class ConcurrentExclusiveSchedulerPair extends System.Object {

        public get Completion(): Task;
        public get ConcurrentScheduler(): TaskScheduler;
        public get ExclusiveScheduler(): TaskScheduler;

        public constructor ()
        public constructor ($taskScheduler: TaskScheduler)
        public constructor ($taskScheduler: TaskScheduler, $maxConcurrencyLevel: int)
        public constructor ($taskScheduler: TaskScheduler, $maxConcurrencyLevel: int, $maxItemsPerTask: int)
        public Complete () : void
    }

    class TaskAsyncEnumerableExtensions {

        public static ConfigureAwait ($source: System.IAsyncDisposable, $continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredAsyncDisposable
        public static ConfigureAwait<T> ($source: System_Collections_Generic.IAsyncEnumerable$1<T>, $continueOnCapturedContext: boolean) : System_Runtime_CompilerServices.ConfiguredCancelableAsyncEnumerable$1<T>
        public static WithCancellation<T> ($source: System_Collections_Generic.IAsyncEnumerable$1<T>, $cancellationToken: System_Threading.CancellationToken) : System_Runtime_CompilerServices.ConfiguredCancelableAsyncEnumerable$1<T>
    }

}

declare module 'System.Runtime.CompilerServices' {
    import * as System from 'System'

    interface TaskAwaiter extends ITaskAwaiter, ICriticalNotifyCompletion {

    }

    interface ICriticalNotifyCompletion extends INotifyCompletion {

    }

    interface INotifyCompletion {

    }

    interface ConfiguredTaskAwaitable {

    }

    interface YieldAwaitable {

    }

    interface TaskAwaiter$1<TResult> extends ITaskAwaiter, ICriticalNotifyCompletion {

    }

    interface ConfiguredTaskAwaitable$1<TResult> {

    }

    interface ValueTaskAwaiter extends ICriticalNotifyCompletion {

    }

    interface ConfiguredValueTaskAwaitable {

    }

    interface ValueTaskAwaiter$1<TResult> extends ICriticalNotifyCompletion {

    }

    interface ConfiguredValueTaskAwaitable$1<TResult> {

    }

    interface ConfiguredAsyncDisposable {

    }

    interface ConfiguredCancelableAsyncEnumerable$1<T> {

    }

}

declare module 'System.Threading.Tasks.Sources' {

    interface IValueTaskSource {

    }

    interface IValueTaskSource$1<TResult> {

    }

}

declare module 'System.Buffers' {
    import * as System from 'System'

    interface MemoryHandle extends System.IDisposable {

    }

}

declare module 'System.Environment' {

    enum SpecialFolder {
        MyDocuments = 5,
        Desktop = 0,
        MyComputer = 17,
        Programs = 2,
        Personal = 5,
        Favorites = 6,
        Startup = 7,
        Recent = 8,
        SendTo = 9,
        StartMenu = 11,
        MyMusic = 13,
        DesktopDirectory = 16,
        Templates = 21,
        ApplicationData = 26,
        LocalApplicationData = 28,
        InternetCache = 32,
        Cookies = 33,
        History = 34,
        CommonApplicationData = 35,
        System = 37,
        ProgramFiles = 38,
        MyPictures = 39,
        CommonProgramFiles = 43,
        MyVideos = 14,
        NetworkShortcuts = 19,
        Fonts = 20,
        CommonStartMenu = 22,
        CommonPrograms = 23,
        CommonStartup = 24,
        CommonDesktopDirectory = 25,
        PrinterShortcuts = 27,
        Windows = 36,
        UserProfile = 40,
        SystemX86 = 41,
        ProgramFilesX86 = 42,
        CommonProgramFilesX86 = 44,
        CommonTemplates = 45,
        CommonDocuments = 46,
        CommonAdminTools = 47,
        AdminTools = 48,
        CommonMusic = 53,
        CommonPictures = 54,
        CommonVideos = 55,
        Resources = 56,
        LocalizedResources = 57,
        CommonOemLinks = 58,
        CDBurning = 59 
    }

    enum SpecialFolderOption {
        None = 0,
        DoNotVerify = 16384,
        Create = 32768 
    }

}

declare module 'System.ActivationContext' {

    enum ContextForm {
        Loose = 0,
        StoreBounded = 1 
    }

}

declare module 'System.Collections.Concurrent' {
    import * as System from 'System'

    interface Partitioner$1<TSource> {

    }

    interface OrderablePartitioner$1<TSource> {

    }

}

declare module 'System.Text' {
    import * as System from 'System'
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class ASCIIEncoding extends Encoding {

        public get BodyName(): string;
        public get EncodingName(): string;
        public get HeaderName(): string;
        public get WebName(): string;
        public get WindowsCodePage(): int;
        public get IsBrowserDisplay(): boolean;
        public get IsBrowserSave(): boolean;
        public get IsMailNewsDisplay(): boolean;
        public get IsMailNewsSave(): boolean;
        public get IsSingleByte(): boolean;
        public get EncoderFallback(): EncoderFallback;
        public set EncoderFallback(value: EncoderFallback);
        public get DecoderFallback(): DecoderFallback;
        public set DecoderFallback(value: DecoderFallback);
        public get IsReadOnly(): boolean;
        public static get ASCII(): Encoding;
        public get CodePage(): int;
        public static get Default(): Encoding;
        public static get Unicode(): Encoding;
        public static get BigEndianUnicode(): Encoding;
        public static get UTF7(): Encoding;
        public static get UTF8(): Encoding;
        public static get UTF32(): Encoding;

        public constructor ()
        /**
        * @methodSwap GetByteCount_EBB7509C_H3D977676
        */
        public GetByteCount ($chars: number[], $index: int, $count: int) : int
        public GetByteCount ($chars: string) : int
        /**
        * @methodSwap GetBytes_EBB7509C_H266066CD
        */
        public GetBytes ($chars: string, $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        /**
        * @methodSwap GetBytes_EBB7509C_CA513156
        */
        public GetBytes ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        public GetCharCount ($bytes: byte[], $index: int, $count: int) : int
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int) : int
        public GetString ($bytes: byte[], $byteIndex: int, $byteCount: int) : string
        public GetMaxByteCount ($charCount: int) : int
        public GetMaxCharCount ($byteCount: int) : int
        public GetDecoder () : Decoder
        public GetEncoder () : Encoder
        public Clone () : any
        public GetByteCount ($chars: number[]) : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H1E0C5D53
        */
        public GetByteCount ($str: string, $index: int, $count: int) : int
        public GetBytes ($chars: number[]) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H3D977676
        */
        public GetBytes ($chars: number[], $index: int, $count: int) : byte[]
        public GetBytes ($s: string) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H1E0C5D53
        */
        public GetBytes ($s: string, $index: int, $count: int) : byte[]
        public GetCharCount ($bytes: byte[]) : int
        public GetChars ($bytes: byte[]) : number[]
        /**
        * @methodSwap GetChars_EBB7509C_EAE74B1C
        */
        public GetChars ($bytes: byte[], $index: int, $count: int) : number[]
        public GetString ($bytes: byte[]) : string
    }

    class Encoding extends System.Object implements System.ICloneable {

        public get BodyName(): string;
        public get EncodingName(): string;
        public get HeaderName(): string;
        public get WebName(): string;
        public get WindowsCodePage(): int;
        public get IsBrowserDisplay(): boolean;
        public get IsBrowserSave(): boolean;
        public get IsMailNewsDisplay(): boolean;
        public get IsMailNewsSave(): boolean;
        public get IsSingleByte(): boolean;
        public get EncoderFallback(): EncoderFallback;
        public set EncoderFallback(value: EncoderFallback);
        public get DecoderFallback(): DecoderFallback;
        public set DecoderFallback(value: DecoderFallback);
        public get IsReadOnly(): boolean;
        public static get ASCII(): Encoding;
        public get CodePage(): int;
        public static get Default(): Encoding;
        public static get Unicode(): Encoding;
        public static get BigEndianUnicode(): Encoding;
        public static get UTF7(): Encoding;
        public static get UTF8(): Encoding;
        public static get UTF32(): Encoding;

        public static Convert ($srcEncoding: Encoding, $dstEncoding: Encoding, $bytes: byte[]) : byte[]
        /**
        * @methodSwap Convert_EBB7509C_H1A4B9788
        */
        public static Convert ($srcEncoding: Encoding, $dstEncoding: Encoding, $bytes: byte[], $index: int, $count: int) : byte[]
        public static RegisterProvider ($provider: EncodingProvider) : void
        /**
        * @methodSwap GetEncoding_EBB7509C_F92D023A
        */
        public static GetEncoding ($codepage: int) : Encoding
        /**
        * @methodSwap GetEncoding_EBB7509C_CDB03482
        */
        public static GetEncoding ($codepage: int, $encoderFallback: EncoderFallback, $decoderFallback: DecoderFallback) : Encoding
        public static GetEncoding ($name: string) : Encoding
        public static GetEncoding ($name: string, $encoderFallback: EncoderFallback, $decoderFallback: DecoderFallback) : Encoding
        public static GetEncodings () : EncodingInfo[]
        public GetPreamble () : byte[]
        public Clone () : any
        public GetByteCount ($chars: number[]) : int
        public GetByteCount ($s: string) : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H3D977676
        */
        public GetByteCount ($chars: number[], $index: int, $count: int) : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H1E0C5D53
        */
        public GetByteCount ($str: string, $index: int, $count: int) : int
        public GetBytes ($chars: number[]) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H3D977676
        */
        public GetBytes ($chars: number[], $index: int, $count: int) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_CA513156
        */
        public GetBytes ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        public GetBytes ($s: string) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H266066CD
        */
        public GetBytes ($s: string, $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        public GetCharCount ($bytes: byte[]) : int
        /**
        * @methodSwap GetCharCount_EBB7509C_EAE74B1C
        */
        public GetCharCount ($bytes: byte[], $index: int, $count: int) : int
        public GetChars ($bytes: byte[]) : number[]
        /**
        * @methodSwap GetChars_EBB7509C_EAE74B1C
        */
        public GetChars ($bytes: byte[], $index: int, $count: int) : number[]
        /**
        * @methodSwap GetChars_EBB7509C_D22F9FF6
        */
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int) : int
        public IsAlwaysNormalized () : boolean
        public IsAlwaysNormalized ($form: NormalizationForm) : boolean
        public GetDecoder () : Decoder
        public GetEncoder () : Encoder
        public GetMaxByteCount ($charCount: int) : int
        public GetMaxCharCount ($byteCount: int) : int
        public GetString ($bytes: byte[]) : string
        /**
        * @methodSwap GetString_EBB7509C_EAE74B1C
        */
        public GetString ($bytes: byte[], $index: int, $count: int) : string
        public Equals ($value: any) : boolean
        public GetHashCode () : int
        /**
        * @methodSwap GetBytes_EBB7509C_H1E0C5D53
        */
        public GetBytes ($s: string, $index: int, $count: int) : byte[]
    }

    class EncodingProvider extends System.Object {

        public GetEncoding ($name: string) : Encoding
        /**
        * @methodSwap GetEncoding_EBB7509C_F92D023A
        */
        public GetEncoding ($codepage: int) : Encoding
        public GetEncoding ($name: string, $encoderFallback: EncoderFallback, $decoderFallback: DecoderFallback) : Encoding
        /**
        * @methodSwap GetEncoding_EBB7509C_CDB03482
        */
        public GetEncoding ($codepage: int, $encoderFallback: EncoderFallback, $decoderFallback: DecoderFallback) : Encoding
    }

    class EncoderFallback extends System.Object {

        public static get ReplacementFallback(): EncoderFallback;
        public static get ExceptionFallback(): EncoderFallback;
        public get MaxCharCount(): int;

        public CreateFallbackBuffer () : EncoderFallbackBuffer
    }

    class EncoderFallbackBuffer extends System.Object {

        public get Remaining(): int;

        /**
        * @methodSwap Fallback_EBB7509C_H404FA305
        */
        public Fallback ($charUnknown: number, $index: int) : boolean
        /**
        * @methodSwap Fallback_EBB7509C_E4200044
        */
        public Fallback ($charUnknownHigh: number, $charUnknownLow: number, $index: int) : boolean
        public GetNextChar () : number
        public MovePrevious () : boolean
        public Reset () : void
    }

    class DecoderFallback extends System.Object {

        public static get ReplacementFallback(): DecoderFallback;
        public static get ExceptionFallback(): DecoderFallback;
        public get MaxCharCount(): int;

        public CreateFallbackBuffer () : DecoderFallbackBuffer
    }

    class DecoderFallbackBuffer extends System.Object {

        public get Remaining(): int;

        public Fallback ($bytesUnknown: byte[], $index: int) : boolean
        public GetNextChar () : number
        public MovePrevious () : boolean
        public Reset () : void
    }

    class EncodingInfo extends System.Object {

        public get CodePage(): int;
        public get Name(): string;
        public get DisplayName(): string;

        public GetEncoding () : Encoding
        public Equals ($value: any) : boolean
        public GetHashCode () : int
    }

    enum NormalizationForm {
        FormC = 1,
        FormD = 2,
        FormKC = 5,
        FormKD = 6 
    }

    class Decoder extends System.Object {

        public get Fallback(): DecoderFallback;
        public set Fallback(value: DecoderFallback);
        public get FallbackBuffer(): DecoderFallbackBuffer;

        public Reset () : void
        /**
        * @methodSwap GetCharCount_EBB7509C_EAE74B1C
        */
        public GetCharCount ($bytes: byte[], $index: int, $count: int) : int
        /**
        * @methodSwap GetCharCount_EBB7509C_H6049A577
        */
        public GetCharCount ($bytes: byte[], $index: int, $count: int, $flush: boolean) : int
        /**
        * @methodSwap GetChars_EBB7509C_D22F9FF6
        */
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int) : int
        /**
        * @methodSwap GetChars_EBB7509C_H823A395
        */
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int, $flush: boolean) : int
        public Convert ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int, $charCount: int, $flush: boolean, $bytesUsed: $Ref<int>, $charsUsed: $Ref<int>, $completed: $Ref<boolean>) : void
    }

    class Encoder extends System.Object {

        public get Fallback(): EncoderFallback;
        public set Fallback(value: EncoderFallback);
        public get FallbackBuffer(): EncoderFallbackBuffer;

        public Reset () : void
        public GetByteCount ($chars: number[], $index: int, $count: int, $flush: boolean) : int
        public GetBytes ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int, $flush: boolean) : int
        public Convert ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int, $byteCount: int, $flush: boolean, $charsUsed: $Ref<int>, $bytesUsed: $Ref<int>, $completed: $Ref<boolean>) : void
    }

    class DecoderExceptionFallback extends DecoderFallback {

        public static get ReplacementFallback(): DecoderFallback;
        public static get ExceptionFallback(): DecoderFallback;
        public get MaxCharCount(): int;

        public constructor ()
        public CreateFallbackBuffer () : DecoderFallbackBuffer
        public Equals ($value: any) : boolean
        public GetHashCode () : int
    }

    class DecoderExceptionFallbackBuffer extends DecoderFallbackBuffer {

        public get Remaining(): int;

        public constructor ()
        public Fallback ($bytesUnknown: byte[], $index: int) : boolean
        public GetNextChar () : number
        public MovePrevious () : boolean
    }

    class DecoderFallbackException extends System.ArgumentException {

        public get BytesUnknown(): byte[];
        public get Index(): int;

        public constructor ()
        public constructor ($message: string)
        public constructor ($message: string, $innerException: System.Exception)
        public constructor ($message: string, $bytesUnknown: byte[], $index: int)
    }

    class DecoderReplacementFallback extends DecoderFallback implements System_Runtime_Serialization.ISerializable {

        public static get ReplacementFallback(): DecoderFallback;
        public static get ExceptionFallback(): DecoderFallback;
        public get MaxCharCount(): int;
        public get DefaultString(): string;

        public constructor ()
        public constructor ($replacement: string)
        public CreateFallbackBuffer () : DecoderFallbackBuffer
        public Equals ($value: any) : boolean
        public GetHashCode () : int
    }

    class DecoderReplacementFallbackBuffer extends DecoderFallbackBuffer {

        public get Remaining(): int;

        public constructor ($fallback: DecoderReplacementFallback)
        public Fallback ($bytesUnknown: byte[], $index: int) : boolean
        public GetNextChar () : number
        public MovePrevious () : boolean
        public Reset () : void
    }

    class EncoderExceptionFallback extends EncoderFallback {

        public static get ReplacementFallback(): EncoderFallback;
        public static get ExceptionFallback(): EncoderFallback;
        public get MaxCharCount(): int;

        public constructor ()
        public CreateFallbackBuffer () : EncoderFallbackBuffer
        public Equals ($value: any) : boolean
        public GetHashCode () : int
    }

    class EncoderExceptionFallbackBuffer extends EncoderFallbackBuffer {

        public get Remaining(): int;

        public constructor ()
        /**
        * @methodSwap Fallback_EBB7509C_H404FA305
        */
        public Fallback ($charUnknown: number, $index: int) : boolean
        /**
        * @methodSwap Fallback_EBB7509C_E4200044
        */
        public Fallback ($charUnknownHigh: number, $charUnknownLow: number, $index: int) : boolean
        public GetNextChar () : number
        public MovePrevious () : boolean
    }

    class EncoderFallbackException extends System.ArgumentException {

        public get CharUnknown(): number;
        public get CharUnknownHigh(): number;
        public get CharUnknownLow(): number;
        public get Index(): int;

        public constructor ()
        public constructor ($message: string)
        public constructor ($message: string, $innerException: System.Exception)
        public IsUnknownSurrogate () : boolean
    }

    class EncoderReplacementFallback extends EncoderFallback implements System_Runtime_Serialization.ISerializable {

        public static get ReplacementFallback(): EncoderFallback;
        public static get ExceptionFallback(): EncoderFallback;
        public get MaxCharCount(): int;
        public get DefaultString(): string;

        public constructor ()
        public constructor ($replacement: string)
        public CreateFallbackBuffer () : EncoderFallbackBuffer
        public Equals ($value: any) : boolean
        public GetHashCode () : int
    }

    class EncoderReplacementFallbackBuffer extends EncoderFallbackBuffer {

        public get Remaining(): int;

        public constructor ($fallback: EncoderReplacementFallback)
        /**
        * @methodSwap Fallback_EBB7509C_H404FA305
        */
        public Fallback ($charUnknown: number, $index: int) : boolean
        /**
        * @methodSwap Fallback_EBB7509C_E4200044
        */
        public Fallback ($charUnknownHigh: number, $charUnknownLow: number, $index: int) : boolean
        public GetNextChar () : number
        public MovePrevious () : boolean
        public Reset () : void
    }

    class StringBuilder extends System.Object implements System_Runtime_Serialization.ISerializable {

        public get Capacity(): int;
        public set Capacity(value: int);
        public get MaxCapacity(): int;
        public get Length(): int;
        public set Length(value: int);

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($value: string)
        public constructor ($value: string, $capacity: int)
        public constructor ($value: string, $startIndex: int, $length: int, $capacity: int)
        public constructor ($capacity: int, $maxCapacity: int)
        public EnsureCapacity ($capacity: int) : int
        public ToString () : string
        /**
        * @methodSwap ToString_EBB7509C_H2CFB2EE5
        */
        public ToString ($startIndex: int, $length: int) : string
        public Clear () : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_H404FA305
        */
        public Append ($value: number, $repeatCount: int) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_H3D977676
        */
        public Append ($value: number[], $startIndex: int, $charCount: int) : StringBuilder
        public Append ($value: string) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_H1E0C5D53
        */
        public Append ($value: string, $startIndex: int, $count: int) : StringBuilder
        public Append ($value: StringBuilder) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_A8156197
        */
        public Append ($value: StringBuilder, $startIndex: int, $count: int) : StringBuilder
        public AppendLine () : StringBuilder
        public AppendLine ($value: string) : StringBuilder
        public CopyTo ($sourceIndex: int, $destination: number[], $destinationIndex: int, $count: int) : void
        /**
        * @methodSwap Insert_EBB7509C_H365A181
        */
        public Insert ($index: int, $value: string, $count: int) : StringBuilder
        public Remove ($startIndex: int, $length: int) : StringBuilder
        public Append ($value: boolean) : StringBuilder
        public Append ($value: number) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_B79438BC
        */
        public Append ($value: byte) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_H6532296C
        */
        public Append ($value: short) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_F92D023A
        */
        public Append ($value: int) : StringBuilder
        public Append ($value: bigint) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_H82424F3E
        */
        public Append ($value: float) : StringBuilder
        /**
        * @methodSwap Append_EBB7509C_H328EE55B
        */
        public Append ($value: double) : StringBuilder
        public Append ($value: System.Decimal) : StringBuilder
        public Append ($value: any) : StringBuilder
        public Append ($value: number[]) : StringBuilder
        public AppendJoin ($separator: string, ...values: any[]) : StringBuilder
        public AppendJoin<T> ($separator: string, $values: System_Collections_Generic.IEnumerable$1<T>) : StringBuilder
        public AppendJoin ($separator: string, ...values: string[]) : StringBuilder
        public AppendJoin ($separator: number, ...values: any[]) : StringBuilder
        public AppendJoin<T> ($separator: number, $values: System_Collections_Generic.IEnumerable$1<T>) : StringBuilder
        public AppendJoin ($separator: number, ...values: string[]) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H7D41E9EE
        */
        public Insert ($index: int, $value: string) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H5B11DF19
        */
        public Insert ($index: int, $value: boolean) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H557CACD9
        */
        public Insert ($index: int, $value: byte) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_B8F5FB1B
        */
        public Insert ($index: int, $value: short) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H7FE8EAC3
        */
        public Insert ($index: int, $value: number) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_A884580F
        */
        public Insert ($index: int, $value: number[]) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H3CA5F0BB
        */
        public Insert ($index: int, $value: number[], $startIndex: int, $charCount: int) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H2CFB2EE5
        */
        public Insert ($index: int, $value: int) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H28EE5CA6
        */
        public Insert ($index: int, $value: bigint) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_A137D5B3
        */
        public Insert ($index: int, $value: float) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H730A42F6
        */
        public Insert ($index: int, $value: double) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_D3DA3842
        */
        public Insert ($index: int, $value: System.Decimal) : StringBuilder
        /**
        * @methodSwap Insert_EBB7509C_H83A59E60
        */
        public Insert ($index: int, $value: any) : StringBuilder
        public AppendFormat ($format: string, $arg0: any) : StringBuilder
        public AppendFormat ($format: string, $arg0: any, $arg1: any) : StringBuilder
        public AppendFormat ($format: string, $arg0: any, $arg1: any, $arg2: any) : StringBuilder
        public AppendFormat ($format: string, ...args: any[]) : StringBuilder
        public AppendFormat ($provider: System.IFormatProvider, $format: string, $arg0: any) : StringBuilder
        public AppendFormat ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any) : StringBuilder
        public AppendFormat ($provider: System.IFormatProvider, $format: string, $arg0: any, $arg1: any, $arg2: any) : StringBuilder
        public AppendFormat ($provider: System.IFormatProvider, $format: string, ...args: any[]) : StringBuilder
        public Replace ($oldValue: string, $newValue: string) : StringBuilder
        public Equals ($sb: StringBuilder) : boolean
        /**
        * @methodSwap Replace_EBB7509C_H1E3B5581
        */
        public Replace ($oldValue: string, $newValue: string, $startIndex: int, $count: int) : StringBuilder
        public Replace ($oldChar: number, $newChar: number) : StringBuilder
        /**
        * @methodSwap Replace_EBB7509C_H99D4135F
        */
        public Replace ($oldChar: number, $newChar: number, $startIndex: int, $count: int) : StringBuilder
        public get_Chars ($index: int) : number
        public set_Chars ($index: int, $value: number) : void
    }

    class UTF32Encoding extends Encoding {

        public get BodyName(): string;
        public get EncodingName(): string;
        public get HeaderName(): string;
        public get WebName(): string;
        public get WindowsCodePage(): int;
        public get IsBrowserDisplay(): boolean;
        public get IsBrowserSave(): boolean;
        public get IsMailNewsDisplay(): boolean;
        public get IsMailNewsSave(): boolean;
        public get IsSingleByte(): boolean;
        public get EncoderFallback(): EncoderFallback;
        public set EncoderFallback(value: EncoderFallback);
        public get DecoderFallback(): DecoderFallback;
        public set DecoderFallback(value: DecoderFallback);
        public get IsReadOnly(): boolean;
        public static get ASCII(): Encoding;
        public get CodePage(): int;
        public static get Default(): Encoding;
        public static get Unicode(): Encoding;
        public static get BigEndianUnicode(): Encoding;
        public static get UTF7(): Encoding;
        public static get UTF8(): Encoding;
        public static get UTF32(): Encoding;

        public constructor ()
        public constructor ($bigEndian: boolean, $byteOrderMark: boolean)
        public constructor ($bigEndian: boolean, $byteOrderMark: boolean, $throwOnInvalidCharacters: boolean)
        /**
        * @methodSwap GetByteCount_EBB7509C_H3D977676
        */
        public GetByteCount ($chars: number[], $index: int, $count: int) : int
        public GetByteCount ($s: string) : int
        /**
        * @methodSwap GetBytes_EBB7509C_H266066CD
        */
        public GetBytes ($s: string, $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        /**
        * @methodSwap GetBytes_EBB7509C_CA513156
        */
        public GetBytes ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        public GetCharCount ($bytes: byte[], $index: int, $count: int) : int
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int) : int
        public GetString ($bytes: byte[], $index: int, $count: int) : string
        public GetDecoder () : Decoder
        public GetEncoder () : Encoder
        public GetMaxByteCount ($charCount: int) : int
        public GetMaxCharCount ($byteCount: int) : int
        public GetPreamble () : byte[]
        public Equals ($value: any) : boolean
        public GetHashCode () : int
        public Clone () : any
        public GetByteCount ($chars: number[]) : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H1E0C5D53
        */
        public GetByteCount ($str: string, $index: int, $count: int) : int
        public GetBytes ($chars: number[]) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H3D977676
        */
        public GetBytes ($chars: number[], $index: int, $count: int) : byte[]
        public GetBytes ($s: string) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H1E0C5D53
        */
        public GetBytes ($s: string, $index: int, $count: int) : byte[]
        public GetCharCount ($bytes: byte[]) : int
        public GetChars ($bytes: byte[]) : number[]
        /**
        * @methodSwap GetChars_EBB7509C_EAE74B1C
        */
        public GetChars ($bytes: byte[], $index: int, $count: int) : number[]
        public GetString ($bytes: byte[]) : string
    }

    class UTF7Encoding extends Encoding {

        public get BodyName(): string;
        public get EncodingName(): string;
        public get HeaderName(): string;
        public get WebName(): string;
        public get WindowsCodePage(): int;
        public get IsBrowserDisplay(): boolean;
        public get IsBrowserSave(): boolean;
        public get IsMailNewsDisplay(): boolean;
        public get IsMailNewsSave(): boolean;
        public get IsSingleByte(): boolean;
        public get EncoderFallback(): EncoderFallback;
        public set EncoderFallback(value: EncoderFallback);
        public get DecoderFallback(): DecoderFallback;
        public set DecoderFallback(value: DecoderFallback);
        public get IsReadOnly(): boolean;
        public static get ASCII(): Encoding;
        public get CodePage(): int;
        public static get Default(): Encoding;
        public static get Unicode(): Encoding;
        public static get BigEndianUnicode(): Encoding;
        public static get UTF7(): Encoding;
        public static get UTF8(): Encoding;
        public static get UTF32(): Encoding;

        public constructor ()
        public constructor ($allowOptionals: boolean)
        public Equals ($value: any) : boolean
        public GetHashCode () : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H3D977676
        */
        public GetByteCount ($chars: number[], $index: int, $count: int) : int
        public GetByteCount ($s: string) : int
        /**
        * @methodSwap GetBytes_EBB7509C_H266066CD
        */
        public GetBytes ($s: string, $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        /**
        * @methodSwap GetBytes_EBB7509C_CA513156
        */
        public GetBytes ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        public GetCharCount ($bytes: byte[], $index: int, $count: int) : int
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int) : int
        public GetString ($bytes: byte[], $index: int, $count: int) : string
        public GetDecoder () : Decoder
        public GetEncoder () : Encoder
        public GetMaxByteCount ($charCount: int) : int
        public GetMaxCharCount ($byteCount: int) : int
        public Clone () : any
        public GetByteCount ($chars: number[]) : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H1E0C5D53
        */
        public GetByteCount ($str: string, $index: int, $count: int) : int
        public GetBytes ($chars: number[]) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H3D977676
        */
        public GetBytes ($chars: number[], $index: int, $count: int) : byte[]
        public GetBytes ($s: string) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H1E0C5D53
        */
        public GetBytes ($s: string, $index: int, $count: int) : byte[]
        public GetCharCount ($bytes: byte[]) : int
        public GetChars ($bytes: byte[]) : number[]
        /**
        * @methodSwap GetChars_EBB7509C_EAE74B1C
        */
        public GetChars ($bytes: byte[], $index: int, $count: int) : number[]
        public GetString ($bytes: byte[]) : string
    }

    class UTF8Encoding extends Encoding {

        public get BodyName(): string;
        public get EncodingName(): string;
        public get HeaderName(): string;
        public get WebName(): string;
        public get WindowsCodePage(): int;
        public get IsBrowserDisplay(): boolean;
        public get IsBrowserSave(): boolean;
        public get IsMailNewsDisplay(): boolean;
        public get IsMailNewsSave(): boolean;
        public get IsSingleByte(): boolean;
        public get EncoderFallback(): EncoderFallback;
        public set EncoderFallback(value: EncoderFallback);
        public get DecoderFallback(): DecoderFallback;
        public set DecoderFallback(value: DecoderFallback);
        public get IsReadOnly(): boolean;
        public static get ASCII(): Encoding;
        public get CodePage(): int;
        public static get Default(): Encoding;
        public static get Unicode(): Encoding;
        public static get BigEndianUnicode(): Encoding;
        public static get UTF7(): Encoding;
        public static get UTF8(): Encoding;
        public static get UTF32(): Encoding;

        public constructor ()
        public constructor ($encoderShouldEmitUTF8Identifier: boolean)
        public constructor ($encoderShouldEmitUTF8Identifier: boolean, $throwOnInvalidBytes: boolean)
        /**
        * @methodSwap GetByteCount_EBB7509C_H3D977676
        */
        public GetByteCount ($chars: number[], $index: int, $count: int) : int
        public GetByteCount ($chars: string) : int
        /**
        * @methodSwap GetBytes_EBB7509C_H266066CD
        */
        public GetBytes ($s: string, $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        /**
        * @methodSwap GetBytes_EBB7509C_CA513156
        */
        public GetBytes ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        public GetCharCount ($bytes: byte[], $index: int, $count: int) : int
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int) : int
        public GetString ($bytes: byte[], $index: int, $count: int) : string
        public GetDecoder () : Decoder
        public GetEncoder () : Encoder
        public GetMaxByteCount ($charCount: int) : int
        public GetMaxCharCount ($byteCount: int) : int
        public GetPreamble () : byte[]
        public Equals ($value: any) : boolean
        public GetHashCode () : int
        public Clone () : any
        public GetByteCount ($chars: number[]) : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H1E0C5D53
        */
        public GetByteCount ($str: string, $index: int, $count: int) : int
        public GetBytes ($chars: number[]) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H3D977676
        */
        public GetBytes ($chars: number[], $index: int, $count: int) : byte[]
        public GetBytes ($s: string) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H1E0C5D53
        */
        public GetBytes ($s: string, $index: int, $count: int) : byte[]
        public GetCharCount ($bytes: byte[]) : int
        public GetChars ($bytes: byte[]) : number[]
        /**
        * @methodSwap GetChars_EBB7509C_EAE74B1C
        */
        public GetChars ($bytes: byte[], $index: int, $count: int) : number[]
        public GetString ($bytes: byte[]) : string
    }

    class UnicodeEncoding extends Encoding {

        public get BodyName(): string;
        public get EncodingName(): string;
        public get HeaderName(): string;
        public get WebName(): string;
        public get WindowsCodePage(): int;
        public get IsBrowserDisplay(): boolean;
        public get IsBrowserSave(): boolean;
        public get IsMailNewsDisplay(): boolean;
        public get IsMailNewsSave(): boolean;
        public get IsSingleByte(): boolean;
        public get EncoderFallback(): EncoderFallback;
        public set EncoderFallback(value: EncoderFallback);
        public get DecoderFallback(): DecoderFallback;
        public set DecoderFallback(value: DecoderFallback);
        public get IsReadOnly(): boolean;
        public static get ASCII(): Encoding;
        public get CodePage(): int;
        public static get Default(): Encoding;
        public static get Unicode(): Encoding;
        public static get BigEndianUnicode(): Encoding;
        public static get UTF7(): Encoding;
        public static get UTF8(): Encoding;
        public static get UTF32(): Encoding;
        public static CharSize : int

        public constructor ()
        public constructor ($bigEndian: boolean, $byteOrderMark: boolean)
        public constructor ($bigEndian: boolean, $byteOrderMark: boolean, $throwOnInvalidBytes: boolean)
        /**
        * @methodSwap GetByteCount_EBB7509C_H3D977676
        */
        public GetByteCount ($chars: number[], $index: int, $count: int) : int
        public GetByteCount ($s: string) : int
        /**
        * @methodSwap GetBytes_EBB7509C_H266066CD
        */
        public GetBytes ($s: string, $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        /**
        * @methodSwap GetBytes_EBB7509C_CA513156
        */
        public GetBytes ($chars: number[], $charIndex: int, $charCount: int, $bytes: byte[], $byteIndex: int) : int
        public GetCharCount ($bytes: byte[], $index: int, $count: int) : int
        public GetChars ($bytes: byte[], $byteIndex: int, $byteCount: int, $chars: number[], $charIndex: int) : int
        public GetString ($bytes: byte[], $index: int, $count: int) : string
        public GetEncoder () : Encoder
        public GetDecoder () : Decoder
        public GetPreamble () : byte[]
        public GetMaxByteCount ($charCount: int) : int
        public GetMaxCharCount ($byteCount: int) : int
        public Equals ($value: any) : boolean
        public GetHashCode () : int
        public Clone () : any
        public GetByteCount ($chars: number[]) : int
        /**
        * @methodSwap GetByteCount_EBB7509C_H1E0C5D53
        */
        public GetByteCount ($str: string, $index: int, $count: int) : int
        public GetBytes ($chars: number[]) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H3D977676
        */
        public GetBytes ($chars: number[], $index: int, $count: int) : byte[]
        public GetBytes ($s: string) : byte[]
        /**
        * @methodSwap GetBytes_EBB7509C_H1E0C5D53
        */
        public GetBytes ($s: string, $index: int, $count: int) : byte[]
        public GetCharCount ($bytes: byte[]) : int
        public GetChars ($bytes: byte[]) : number[]
        /**
        * @methodSwap GetChars_EBB7509C_EAE74B1C
        */
        public GetChars ($bytes: byte[], $index: int, $count: int) : number[]
        public GetString ($bytes: byte[]) : string
    }

}

declare module 'System.Collections.ObjectModel.ReadOnlyDictionary$2' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class KeyCollection<TKey,TValue> extends System.Object implements System_Collections.ICollection, System_Collections_Generic.IReadOnlyCollection$1<TKey>, System_Collections_Generic.ICollection$1<TKey> {

        public get Count(): int;

        public CopyTo ($array: TKey[], $arrayIndex: int) : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<TKey>
        public [Symbol.iterator]() : IterableIterator<TKey>
    }

    class ValueCollection<TKey,TValue> extends System.Object implements System_Collections.ICollection, System_Collections_Generic.IReadOnlyCollection$1<TValue>, System_Collections_Generic.ICollection$1<TValue> {

        public get Count(): int;

        public CopyTo ($array: TValue[], $arrayIndex: int) : void
        public GetEnumerator () : System_Collections_Generic.IEnumerator$1<TValue>
        public [Symbol.iterator]() : IterableIterator<TValue>
    }

}

declare module 'System.Collections.Generic.Dictionary$2' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Collections_Generic_Dictionary$2_KeyCollection from 'System.Collections.Generic.Dictionary$2.KeyCollection'
    import * as System_Collections_Generic_Dictionary$2_ValueCollection from 'System.Collections.Generic.Dictionary$2.ValueCollection'

    class Enumerator<TKey,TValue> extends System.ValueType implements System_Collections.IDictionaryEnumerator, System_Collections_Generic.IEnumerator$1<System_Collections_Generic.KeyValuePair$2<TKey, TValue>> {

        public get Current(): System_Collections_Generic.KeyValuePair$2<TKey, TValue>;

        public MoveNext () : boolean
        public Dispose () : void
    }

    class KeyCollection<TKey,TValue> extends System.Object implements System_Collections.ICollection, System_Collections_Generic.IReadOnlyCollection$1<TKey>, System_Collections_Generic.ICollection$1<TKey> {

        public get Count(): int;

        public constructor ($dictionary: System_Collections_Generic.Dictionary$2<TKey, TValue>)
        public GetEnumerator () : System_Collections_Generic_Dictionary$2_KeyCollection.Enumerator<TKey, TValue>
        public CopyTo ($array: TKey[], $index: int) : void
        public [Symbol.iterator]() : IterableIterator<TKey>
    }

    class ValueCollection<TKey,TValue> extends System.Object implements System_Collections.ICollection, System_Collections_Generic.IReadOnlyCollection$1<TValue>, System_Collections_Generic.ICollection$1<TValue> {

        public get Count(): int;

        public constructor ($dictionary: System_Collections_Generic.Dictionary$2<TKey, TValue>)
        public GetEnumerator () : System_Collections_Generic_Dictionary$2_ValueCollection.Enumerator<TKey, TValue>
        public CopyTo ($array: TValue[], $index: int) : void
        public [Symbol.iterator]() : IterableIterator<TValue>
    }

}

declare module 'System.Collections.Generic.Dictionary$2.KeyCollection' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class Enumerator<TKey,TValue> extends System.ValueType implements System_Collections_Generic.IEnumerator$1<TKey> {

        public get Current(): TKey;

        public Dispose () : void
        public MoveNext () : boolean
    }

}

declare module 'System.Collections.Generic.Dictionary$2.ValueCollection' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class Enumerator<TKey,TValue> extends System.ValueType implements System_Collections_Generic.IEnumerator$1<TValue> {

        public get Current(): TValue;

        public Dispose () : void
        public MoveNext () : boolean
    }

}

declare module 'System.Collections.Generic.List$1' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class Enumerator<T> extends System.ValueType implements System_Collections_Generic.IEnumerator$1<T> {

        public get Current(): T;

        public Dispose () : void
        public MoveNext () : boolean
    }

}

declare module 'System.Collections.Generic.Queue$1' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class Enumerator<T> extends System.ValueType implements System_Collections_Generic.IEnumerator$1<T> {

        public get Current(): T;

        public Dispose () : void
        public MoveNext () : boolean
    }

}

declare module 'System.Collections.Generic.Stack$1' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    class Enumerator<T> extends System.ValueType implements System_Collections_Generic.IEnumerator$1<T> {

        public get Current(): T;

        public Dispose () : void
        public MoveNext () : boolean
    }

}

