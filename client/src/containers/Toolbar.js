import React, {useState} from 'react'
import {GoTextSize, GoDeviceCamera, GoLink} from 'react-icons/go'
import {useAuth} from '../hooks'
import Toolbar from '../components/Toolbar'
import IconButton from '../components/IconButton'
import DisplayPicture from '../components/DisplayPicture'
import FlexCard from '../components/FlexCard'
import FlexWrapper from '../components/FlexWrapper'
// import RelativeWrapper from '../components/RelativeWrapper'
import NewPostForm from './NewPostForm'

export default () => {
  const [localUserData] = useAuth()
  const [activePostType, setActivePostType] = useState()

  // not logged in
  if (!localUserData) return null
  return (
    <FlexWrapper>
      {localUserData && <DisplayPicture email={localUserData.email} />}
      <FlexCard>
        <Toolbar>
          <IconButton
            onClick={() => setActivePostType('text')}
            Icon={GoTextSize}
          >
            Text
          </IconButton>
          <IconButton
            onClick={() => setActivePostType('photo')}
            Icon={GoDeviceCamera}
          >
            Photo
          </IconButton>
          <IconButton onClick={() => setActivePostType('link')} Icon={GoLink}>
            Link
          </IconButton>
        </Toolbar>
        {activePostType && (
          <NewPostForm
            type={activePostType}
            onCreate={() => setActivePostType(null)}
          />
        )}
      </FlexCard>
    </FlexWrapper>
  )
}
