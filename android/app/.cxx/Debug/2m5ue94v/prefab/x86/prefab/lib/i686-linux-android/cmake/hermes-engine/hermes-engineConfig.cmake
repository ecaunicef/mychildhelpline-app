if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/itm/.gradle/caches/8.10.2/transforms/f17d05ab89693f59863034d9dd750308/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/itm/.gradle/caches/8.10.2/transforms/f17d05ab89693f59863034d9dd750308/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

