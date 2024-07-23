import React, { useEffect, useState } from 'react'
import Button from '../../../components/Button'
import { Box, Modal } from '@mui/material'

const TeamModal: React.FC<any> = ({ isOpen, onRequestClose, team, onSave }) => {
  const [pokemonId, setPokemonId] = useState('')
  const [pokemonName, setPokemonName] = useState('')

  const handleSave = () => {
    if (team) {
      onSave.mutateAsync([
        {
          idOwner: team.id_owner,
          pokemonId: parseInt(pokemonId),
          pokemonName,
        },
      ])
    }
    onRequestClose()
    setPokemonId('')
    setPokemonName('')
  }

  useEffect(() => {
    setPokemonId(team?.pokemon_id)
    setPokemonName(team?.pokemon_name)
  }, [team])

  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '30%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Modal
        open={isOpen}
        onClose={onRequestClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          height: 450,
          width: '30%',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            justifyContent: 'center',
            padding: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(80%, 80%)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Pokémon Id</p>
            <input
              value={pokemonId ?? team?.pokemon_id}
              onChange={(e) => setPokemonId(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Pokémon Name</p>
            <input
              value={pokemonName ?? team?.pokemon_name}
              onChange={(e) => setPokemonName(e.target.value)}
            />
          </div>
          <Button onClick={() => handleSave()}>Salvar</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default TeamModal
