import { FaLessThan } from "react-icons/fa";
import './App.css';
import { useState } from 'react';

const images = [
  'https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc',
  'https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9',
  'https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w',
  'https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc'
]

function App() {


  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <div className="App">

      {/* App Header */}
      <header className="App-header">
        <div className="logo">
        <FaLessThan size={12} /> 
        <img src="https://sadanandpai.github.io/frontend-mini-challenges/react/assets/logo-Cv_hAIcG.png"
        alt="Logo" height="40px" width="40px"
        />
        </div>
        <h2>Image Gallery</h2>
        <div className="github-logo">
        <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-code-xml'%3e%3cpath%20d='m18%2016%204-4-4-4'/%3e%3cpath%20d='m6%208-4%204%204%204'/%3e%3cpath%20d='m14.5%204-5%2016'/%3e%3c/svg%3e"
        alt="Logo" height="30px" width="30px"
        />
        <img src="https://sadanandpai.github.io/frontend-mini-challenges/react/assets/github-KMwwOUMo.svg"
        alt="Logo" height="30px" width="30px"
        />
        </div>
      </header>

        {/* Image container */}
      <div className='image-gallery-container'>
      <p className='gallery-para'>Click on an image!</p>
      <div className='image-container'>
        {images.map((image, index) => (
          <div key={index} className='image-wrapper' onClick={() => handleClick(image)}>
            <img src={image} alt={`Image ${index + 1}`} className='gallery-image' />
          </div>
        ))}
      </div>
      {selectedImage && (
          <div className="selected-image">
            <h2 className="selected-heading">Selected Image</h2>
            <img src={selectedImage} alt="Selected" className="selected-img" />
          </div>
        )}
    </div>
    </div>
  );
}

export default App;
