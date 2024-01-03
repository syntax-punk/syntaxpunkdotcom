import { memo, useCallback, useEffect } from "react";
import styled from "styled-components"

const ToggleSwitch = memo(function ToggleSwitch() {

  useEffect(function onMount() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      (document.getElementById('checkbox') as HTMLInputElement).checked = true;
    }
  }, [])

  const switchTheme = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }    
  }, [])

  return (
    <SwitchContainer>
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={switchTheme} />
        <div className="slider round"></div>
      </label>
    </SwitchContainer>
  )
});


const SwitchContainer = styled.div`
  display: flex;
  align-items: center;

  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;    
  }

  .theme-switch input {
    display:none;
    
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }

  input:checked + .slider {
    background-color: #535353;
  }

  input:checked + .slider:before {
    background-color: #000000;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export { ToggleSwitch }