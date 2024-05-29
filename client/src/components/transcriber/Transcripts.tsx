import './Transcripts.css'

export const Transcripts = () => {


    return (
        <div className="d-flex flex-column p-2 transcript">
            <video controls className='video-plant'>
                <source src="https://www.youtube.com/watch?v=gRAIhSFGEnk" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button className="btn-siguiente my-2"> Ir a la transcricpion del video</button>
            <button className="btn-siguiente"> Ir al video audiodescrito </button>

        </div>
    );
}