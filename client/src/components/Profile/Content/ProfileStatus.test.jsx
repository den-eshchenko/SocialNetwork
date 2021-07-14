import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('test ProfileStatus component', () => {
    // test('статус из пропсов попал в state', () => {
    //   const component = create(<ProfileStatus status='новоый тестовый статус' />);
    //   const instanse = component.getInstance();
    //   expect(instanse.state.status).toBe('новоый тестовый статус');
    // });

    test('есть ли span при первой загрузке', () => {
      const component = create(<ProfileStatus status='новоый тестовый статус' />);
      const root = component.root;
      let span = root.findByType('span');
      expect(span).not.toBeNull();
    });
})