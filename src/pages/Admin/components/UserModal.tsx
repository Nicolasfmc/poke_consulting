import React, { useEffect, useState } from 'react'
import Button from '../../../components/Button'
import { Box, Modal } from '@mui/material'

const UserModal: React.FC<any> = ({ isOpen, onRequestClose, user, onSave }) => {
  const [username, setUsername] = useState('')
  const [senha, setSenha] = useState('')
  const [idade, setIdade] = useState('')
  const [indInativo, setIndInativo] = useState('')
  const [indAdmin, setIndAdmin] = useState('')
  const [indPlano, setIndPlano] = useState('')

  const handleSave = () => {
    if (user) {
      onSave.mutateAsync({
        id: user.id,
        username,
        senha,
        idade: parseInt(idade),
        indInativo: parseInt(indInativo),
        indAdmin: parseInt(indAdmin),
        indPlano: parseInt(indPlano),
      })
    }
    onRequestClose()
    setUsername('')
    setSenha('')
    setIdade('')
    setIndInativo('')
    setIndAdmin('')
    setIndPlano('')
  }

  useEffect(() => {
    setUsername(user?.username)
    setSenha(user?.senha)
    setIdade(user?.idade)
    setIndInativo(user?.ind_inativo)
    setIndAdmin(user?.ind_admin)
    setIndPlano(user?.ind_plano)
  }, [user])

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
          }}
        >
          <div style={{ display: 'flex' }}>
            <p>Username</p>
            <input
              value={username ?? user?.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <p>senha</p>
            <input
              value={senha ?? user?.senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <p>idade</p>
            <input
              value={idade ?? user?.idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <p>ind Inativo</p>
            <input
              value={indInativo ?? user?.ind_inativo}
              onChange={(e) => setIndInativo(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <p>ind Admin</p>
            <input
              value={indAdmin ?? user?.ind_admin}
              onChange={(e) => setIndAdmin(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <p>ind Plano</p>
            <input
              value={indPlano ?? user?.ind_plano}
              onChange={(e) => setIndPlano(e.target.value)}
            />
          </div>
          <Button onClick={() => handleSave()}>Salvar</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default UserModal
