import React from 'react'

export default function AddProduct(props) {
	return (
		<div>
			<p>add prod</p>
			<button onClick={()=>props.close()}>Close</button>
		</div>
	)
}
