import React from 'react';
import styles from "../App.module.css";

type CurImg = {
	alt_description: string,
	height: number,
	urls: {regular: string},
	width: number
}

export default function ImageBlock(curImg: CurImg, idx: number) {
	return (
		<li
			key={idx}
			className={styles.imageBlock}
			style={{
				width: `${curImg['width']*168/curImg['height']}px`,
				flexGrow: +`${curImg['width']*168/curImg['height']}`
			}}>
			<div style={{paddingBottom: `${curImg['height']/curImg['width']*100}%`}}></div>
			<img src={curImg['urls']['regular']} alt={curImg['alt_description']} />
			<div className={styles.imageDesc}>{curImg['alt_description']}</div>
		</li>
	)
}
