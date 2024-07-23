import React, { useEffect, useState } from 'react'
import Button from '../../../components/Button'
import { Box, Modal } from '@mui/material'

const UserNewModal: React.FC<any> = ({ isOpen, onRequestClose, onSave }) => {
  const [username, setUsername] = useState('')
  const [senha, setSenha] = useState('')
  const [idade, setIdade] = useState('')
  const [indInativo, setIndInativo] = useState('')
  const [indAdmin, setIndAdmin] = useState('')
  const [indPlano, setIndPlano] = useState('')

  const handleSave = () => {
    onSave.mutateAsync({
      username,
      senha,
      idade: parseInt(idade),
      indInativo: parseInt(indInativo),
      indAdmin: parseInt(indAdmin),
      indPlano: parseInt(indPlano),
    })
    onRequestClose()
  }

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
            <p>Username</p>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Senha</p>
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Idade</p>
            <input
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Ind. Inativo</p>
            <input
              value={indInativo}
              onChange={(e) => setIndInativo(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Ind. Admin</p>
            <input
              value={indAdmin}
              onChange={(e) => setIndAdmin(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Ind. Plano</p>
            <input
              value={indPlano}
              onChange={(e) => setIndPlano(e.target.value)}
              required
            />
          </div>
          <Button onClick={() => handleSave()}>Salvar</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default UserNewModal
