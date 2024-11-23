import React from 'react'
import styles from './appStyles.module.css'
import './myStyle.css'
export default function AllCombined() {
  return (
    <div>
<h1 className={styles.success}>AllCombined Success</h1>
<h1 className='error'>failure</h1>


    </div>
  )
}
