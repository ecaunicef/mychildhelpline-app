import React, { forwardRef } from 'react'
import {
    StyleSheet,
    View,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
    Text,
} from 'react-native'
import Video, { OnLoadData, OnProgressData } from 'react-native-video'

type VideoSource = { uri?: string | NodeRequire | undefined }

interface VideoPlayerProps {
    source: VideoSource
    paused?: boolean
    controls?: boolean
    resizeMode?: 'contain' | 'cover' | 'stretch'
    onLoad?: (data: OnLoadData) => void
    onProgress?: (data: OnProgressData) => void
    onError?: (error: any) => void
    onEnd?: () => void
    handleReplay?: () => void
    style?: StyleProp<ViewStyle>
    isVideoEnded?: boolean
    isLoading?: boolean
    hasError?: boolean
}

const VideoPlayer = forwardRef<
    React.ElementRef<typeof Video>,
    VideoPlayerProps
>(
    (
        {
            source,
            paused = false,
            controls = true,
            resizeMode = 'contain',
            onLoad,
            onProgress,
            onError,
            onEnd,
            handleReplay,
            style,
            isVideoEnded,
            isLoading,
            hasError,
        },
        ref
    ) => {
        return (
            <View style={[styles.container, style]}>
                <Video
                    ref={ref}
                    source={source}
                    paused={paused || isVideoEnded}
                    controls={controls}
                    resizeMode={resizeMode}
                    onLoad={onLoad}
                    onProgress={onProgress}
                    onError={onError}
                    onEnd={onEnd}
                    style={styles.video}
                />
                {isLoading && !hasError && (
                    <View style={styles.loadingOverlay}>
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                )}

                {hasError && !isLoading && (
                    <View style={styles.errorOverlay}>
                        <Text style={styles.errorText}>
                            Error loading video.
                        </Text>
                    </View>
                )}

                {isVideoEnded && (
                    <TouchableOpacity
                        style={styles.replayButton}
                        onPress={handleReplay}
                    >
                        <Text style={styles.replayText}>Replay</Text>
                    </TouchableOpacity>
                )}
                {isVideoEnded && (
                    <TouchableOpacity
                        style={styles.replayButton}
                        onPress={handleReplay}
                    >
                        <Text style={styles.replayText}>Replay</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    replayButton: {
        position: 'absolute',
        bottom: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
    replayText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 22.5,
    },
    loadingOverlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
    },
    loadingText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 22.5,
    },
    errorText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 22.5,
    },
    overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 20,
        borderRadius: 10,
    },
    errorOverlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
    },
})

export default VideoPlayer
