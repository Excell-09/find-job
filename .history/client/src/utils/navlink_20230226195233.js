import {AiOutlineHome,AiOutlineHistory} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {IoIosAddCircleOutline} from 'react-icons/io'
import { useAppContext } from '../context/appContext'

const {} = useAppContext()
if()

export const NAVLINK = [
  {logo:AiOutlineHome, to:'/',label:'Home'},
  {logo:IoIosAddCircleOutline, to:'/create',label:'Add'},
  {logo:CgProfile, to:'/update',label:'Profile'},
  {logo:AiOutlineHistory, to:'/history',label:'History'},
]