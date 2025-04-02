import React, { useRef, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Video from 'react-native-video'
import VideoPlayer from '../../components/VideoPlayer'
import Layout from '../../components/common/Layout/Layout'
import localization from '../../utils/localization'

const { height, width } = Dimensions.get('window')

const videosObj: any = {
    breath: require('../../../assets/video/breath.mp4'),
    count: require('../../../assets/video/count.mp4'),
}

const VideosPlayer = ({ route }: { route: any }) => {
    const videoRef = useRef<React.ElementRef<typeof Video>>(null)
    const [isVideoEnded, setIsVideoEnded] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const { videoUrl } = route.params as { videoUrl: string }

    const handleLoad = () => {
        setIsLoading(false)
    }

    const handleError = () => {
        setIsLoading(false)
        setHasError(true)
    }

    const handleEnd = () => {
        setIsVideoEnded(true)
    }

    const handleReplay = () => {
        if (videoRef.current) {
            videoRef.current.seek(0)
            setIsVideoEnded(false)
        }
    }

    return (
        <Layout
            ScreenName={
                localization[videoUrl === 'count' ? 'counting' : videoUrl]
            }
            BackButton={true}
        >
            <View style={styles.container}>
                <VideoPlayer
                    source={videosObj[videoUrl]}
                    paused={isVideoEnded}
                    ref={videoRef}
                    resizeMode="cover"
                    controls={false}
                    style={{ height, width }}
                    onEnd={handleEnd}
                    onLoad={handleLoad}
                    onError={handleError}
                    isVideoEnded={isVideoEnded}
                    handleReplay={handleReplay}
                    isLoading={isLoading}
                    hasError={hasError}
                />
            </View>
        </Layout>
    )
}

export default VideosPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
})
