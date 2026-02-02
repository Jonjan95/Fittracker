'use server';
import pool from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addProduct(formData) {
  const name = formData.get('name');
  const description = formData.get('description');

  await pool.query(
    'INSERT INTO items (name, description) VALUES (?, ?)',
    [name, description]
  );

  revalidatePath('/'); // Uppdaterar sidan direkt efter tillägg
}

export async function deleteProduct(id) {
  await pool.query('DELETE FROM items WHERE id = ?', [id]);
  revalidatePath('/');
}