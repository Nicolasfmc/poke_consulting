import React from 'react'
import bkgHome from '../../assets/bkg_home.png'
import logo from '../../assets/pokeball_logo.png'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${bkgHome})` }}>
      <header
        style={{
          width: '100%',
          height: '100px',

          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          backgroundColor: 'white',
          boxShadow: '0 5px 10px 10px #FFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Background"
            width={'60px'}
            height={'auto'}
            style={{ padding: '0 10px 0 20px' }}
          />
          <h3>PokeConsult</h3>
        </div>
        <div style={{ display: 'flex', paddingRight: 30 }}>
          <Button variant="outlined" color="error">
            LOGIN
          </Button>
        </div>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '550px',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
      >
        <h2 style={{ color: 'white' }}>
          Build your ultimate Pokémon team with expert advice.
        </h2>
        <p
          style={{
            width: '40%',
            color: 'white',
            wordBreak: 'break-word',
            textAlign: 'justify',
            stroke: '#000',
          }}
        >
          We are a Brazil-based consultancy dedicated to helping Pokémon
          trainers excel. Our expertise lies in crafting winning team
          compositions and providing strategic advice to elevate your Pokémon
          battles. Let us be your guide to mastering the art of Pokémon training
          and strategy.
        </p>
      </div>
      <div
        style={{
          width: '100%',
          minHeight: 'calc(100vh - 650px)', // Subtrai a altura do header
          backgroundColor: 'white',
          boxShadow: '0 -5px 10px 10px #FFF',
        }}
      >
        {/* Conteúdo da div principal */}
      </div>
    </div>
  )
}

export default Home
