import React, { useContext } from 'react'
import { ContextApp } from '../../../ContextAPI'
import { db } from '../../../Fire'
import Btn from '../../Btn/Btn'
import './Addtofavorite.css'
import firebase from 'firebase'
const Addtofavorite = (props) => {
  const {id, icon, text, className, Tag=Btn, issaved} = props
  const {user, saved} = useContext(ContextApp)
  const handleAddToFavorite = () => {
   if(issaved) {
    db.collection('users').doc(user.uid).update({
      saved: firebase.firestore.FieldValue.arrayRemove({id})
    })
   }
   else {
    db.collection('users').doc(user.uid).update({
      saved: firebase.firestore.FieldValue.arrayUnion({id})
    })
   }
  }

  return (
  
    <Tag onClick={()=>{ handleAddToFavorite()}} clickEvent={()=> handleAddToFavorite()} className={`${issaved?'fa fa-heart':'fal fa-heart'}`} text={text}/>
 
  )
}
export default Addtofavorite