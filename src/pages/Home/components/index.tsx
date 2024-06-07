import React from 'react'
import colors from '../../../utils/colors'

interface Props {
  imageUrl?: string
  title: string
  text: string
  reverse?: boolean
}

const ImageTextComponent: React.FC<Props> = ({
  imageUrl = undefined,
  title,
  text,
  reverse,
}) => {
  const styles: any = {
    container: {
      display: 'flex',
      alignItems: 'center',
      width: window.innerWidth,
      marginBottom: '20px',
      flexDirection: reverse ? 'row-reverse' : 'row',
    },
    imageContainer: {
      width: '620px',
      height: '400px',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontWeight: 'semibold',
      marginBottom: '5px',
      color: colors.titleText,
    },
    text: {
      color: colors.subText,
      lineHeight: 1.6,
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} style={styles.image} />
        ) : (
          <div style={{ ...styles.image, backgroundColor: '#78B1AD' }} />
        )}
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default ImageTextComponent
