// is_Day property 0 = night, 1 = has daylight

export const WeatherDesc = {
    CLEAR: {
        0: '/star/38',
        1: '/sun/26',
    },
    MAINLY_CLEAR: {
        0: '/moon/31',
        1: '/sun/27',
    },
    PARTLY_CLOUDY: {
        0: '/star/33',
        1: '/sun/27',
    },
    OVERCAST: {
        0: '/cloud/35',
        1: '/cloud/35',
    },
    FOG: {
        0: '/moon/15',
        1: '/cloud/35',
    },
    RIME_FOG: {
        0: '/moon/15',
        1: '/cloud/35',
    },
    DRIZZLE_LIGHT: {
        0: '/moon/1',
        1: '/sun/8',
    },
    DRIZZLE_MODERATE: {
        0: '/moon/1',
        1: '/cloud/7',
    },
    DRIZZLE_DENSE: {
        0: '/moon/1',
        1: '/cloud/7',
    },
    FREEZING_DRIZZLE_LIGHT: {
        0: '/moon/1',
        1: '/cloud/22',
    },
    FREEZING_DRIZZLE_DENSE: {
        0: '/moon/1',
        1: '/cloud/22',
    },
    RAIN_SLIGHT: {
        0: '/moon/1',
        1: '/cloud/7',
    },
    RAIN_MODERATE: {
        0: '/moon/1',
        1: '/cloud/7',
    },
    RAIN_DENSE: {
        0: '/rain/39',
        1: '/rain/39',
    },
    FREEZING_RAIN_LIGHT: {
        0: '/moon/1',
        1: '/cloud/22',
    },
    FREEZING_RAIN_HEAVY: {
        0: '/moon/1',
        1: '/cloud/22',
    },
    SNOW_FALL_LIGHT: {
        0: '/moon/40',
        1: '/cloud/23',
    },
    SNOW_FALL_MODERATE: {
        0: '/moon/40',
        1: '/cloud/23',
    },
    SNOW_FALL_HEAVY: {
        0: '/snow/36',
        1: '/snow/36',
    },
    SNOW_GRAINS: {
        0: '/snow/36',
        1: '/snow/36',
    },
    RAIN_SHOWERS_SLIGHT: {
        0: '/moon/1',
        1: '/cloud/7',
    },
    RAIN_SHOWERS_MODERATE: {
        0: '/moon/2.1',
        1: '/cloud/5',
    },
    RAIN_SHOWERS_VIOLENT: {
        0: '/moon/2.1',
        1: '/cloud/17',
    },
    SNOW_SHOWERS_SLIGHT: {
        0: '/moon/40',
        1: '/cloud/23',
    },
    SNOW_SHOWERS_HEAVY: {
        0: '/moon/40',
        1: '/cloud/23',
    },
    THUNDERSTORM: {
        0: '/moon/20',
        1: '/cloud/28',
    },
    THUNDERSTORM_LIGHT_HAIL: {
        0: '/moon/20',
        1: '/cloud/28',
    },
    THUNDERSTORM_HEAVY_HAIL: {
        0: '/moon/20',
        1: '/cloud/28',
    },
};

export const WeatherCodes = {
    0: WeatherDesc.CLEAR,
    1: WeatherDesc.MAINLY_CLEAR,
    2: WeatherDesc.PARTLY_CLOUDY,
    3: WeatherDesc.OVERCAST,
    45: WeatherDesc.FOG,
    48: WeatherDesc.RIME_FOG,
    51: WeatherDesc.DRIZZLE_LIGHT,
    53: WeatherDesc.DRIZZLE_MODERATE,
    55: WeatherDesc.DRIZZLE_DENSE,
    56: WeatherDesc.FREEZING_DRIZZLE_LIGHT,
    57: WeatherDesc.FREEZING_DRIZZLE_DENSE,
    61: WeatherDesc.RAIN_SLIGHT,
    63: WeatherDesc.RAIN_MODERATE,
    65: WeatherDesc.RAIN_DENSE,
    66: WeatherDesc.FREEZING_RAIN_LIGHT,
    67: WeatherDesc.FREEZING_RAIN_HEAVY,
    71: WeatherDesc.SNOW_FALL_LIGHT,
    73: WeatherDesc.SNOW_FALL_MODERATE,
    75: WeatherDesc.SNOW_FALL_HEAVY,
    77: WeatherDesc.SNOW_GRAINS,
    80: WeatherDesc.RAIN_SHOWERS_SLIGHT,
    81: WeatherDesc.RAIN_SHOWERS_MODERATE,
    82: WeatherDesc.RAIN_SHOWERS_VIOLENT,
    85: WeatherDesc.SNOW_SHOWERS_SLIGHT,
    86: WeatherDesc.SNOW_SHOWERS_HEAVY,
    95: WeatherDesc.THUNDERSTORM,
    96: WeatherDesc.THUNDERSTORM_LIGHT_HAIL,
    99: WeatherDesc.THUNDERSTORM_HEAVY_HAIL,
};
