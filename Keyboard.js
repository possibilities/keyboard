const Keyboard = ({ keys, width = 599 }) => (
  <>
    <style jsx>{`
      .keyboard {
        font-size: ${width * 0.025}px;
        height: ${width * 0.34}px;
        width: ${width}px;
      }
    `}</style>
    <style jsx>{`
      .keyboard {
        display: flex;
        flex-direction: column;
        user-select: none;
      }
      .keys {
        flex: 1;
        display: flex;
        flex-direction: row;
        margin-bottom: .2rem;
      }
      .keys:last-child {
        margin-bottom: 0;
      }
      .key {
        flex: 1;
        display: flex;
        font-family: sans-serif;
        justify-content: center;
        align-items: center;
        color: #FFF;
        background: #CCC;
        margin-right: .2rem;
      }
      .key:last-child {
        margin-right: 0;
      }
    `}</style>

    <div className='container'>
      <div className='keyboard'>
        {keys.map((row, rowIndex) => (
          <div className='keys' key={rowIndex}>
            {keys[rowIndex].map(key => (
              <div
                key={key.name}
                className='key'
                style={{ flexGrow: `${key.width}` }}>
                {key.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
)

export default Keyboard
