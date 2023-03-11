import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const PlayList = props => {
  const {playListDetails, deletePlayList} = props
  const {id, imageUrl, name, genre, duration} = playListDetails

  const onDeletePlaylist = () => {
    deletePlayList(id)
  }

  return (
    <li className="list-container">
      <div className="image-container">
        <img className="song-img" alt="track" src={imageUrl} />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <p className="duration">{duration}</p>
        <button
          className="delete-btn"
          type="button"
          onClick={onDeletePlaylist}
          data-testid="delete"
        >
          <RiDeleteBin7Line size={30} color="#ffffff" />
        </button>
      </div>
    </li>
  )
}

export default PlayList
