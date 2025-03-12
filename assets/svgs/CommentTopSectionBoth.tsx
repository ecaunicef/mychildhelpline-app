import React from 'react'
import CommentTopSectionIcon from './CommentTopSectionIcon'
import CommentTopSectionText from './CommentTopSectionText'

const CommentTopSectionBoth = (props: any) => {
    return (
        <>
            <CommentTopSectionText
                style={{ width: '100%', height: '100%' }}
                commonCommentTitle={props.commonCommentTitle}
                commonCommentDescription={props.commonCommentDescription}
            />
            <CommentTopSectionIcon />
        </>
    )
}

export default CommentTopSectionBoth
