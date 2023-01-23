import { describe, it } from 'vitest';

describe('ProductsList', () => {
  describe('while loading', () => {
    it.todo('renders a loader');
  });

  describe('with an error', () => {
    it.todo('renders an error message');
  });

  describe('with data', () => {
    it.todo('renders 5 products in the table');

    it.todo('renders id, name, year columns');

    describe('on row click', () => {
      it.todo('renders a modal with product details');
    });
  });
});
