export type Raridade = 'Selecionada' | 'Deluxe' | 'Premium' | 'Exclusiva' | 'Ultra';
export type TipoArma = 'Classic' | 'Shorty' | 'Frenzy' | 'Ghost' | 'Sheriff' | 'Stinger' | 'Spectre' | 'Bucky' | 'Judge' | 'Bulldog' | 'Guardian' | 'Phantom' | 'Vandal' | 'Marshal' | 'Outlaw' | 'Operator' | 'Ares' | 'Odin' | 'Melee';

export interface Skin {
    id: number;
    nome: string;
    raridade: Raridade;
    tipoArma: TipoArma; 
    imageUrl: string;
}

export const SKINS_DATA: Skin[] = [
  { id: 1, nome: 'Kuronami no Yaiba', raridade: 'Exclusiva', tipoArma: 'Melee', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/31A9B6A5-4C0B-F7BC-F2A6-A8B5EEFFB898.png' },
  { id: 2, nome: 'Classic Imposição', raridade: 'Deluxe', tipoArma: 'Classic', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/4BF58E6E-4218-7443-A786-DB99C5B3EDF1.png' },
  { id: 3, nome: 'Classic Sublime', raridade: 'Premium', tipoArma: 'Classic', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/D9DCE0EC-464C-DF67-63A3-1F9A05D322AD.png' },
  { id: 4, nome: 'Classic Glitchpop', raridade: 'Exclusiva', tipoArma: 'Classic', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/BB1E1703-4EA1-9BE5-C145-4480A6B9F0D7.png' },
  { id: 5, nome: 'Shorty Prismática II', raridade: 'Selecionada', tipoArma: 'Shorty', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/49BA0B3A-4418-7362-C671-BCA65B913FC0.png' },
  { id: 6, nome: 'Canivete-Borboleta', raridade: 'Exclusiva', tipoArma: 'Melee', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/F5851647-448E-A209-915F-4597DF528522.png' },
  { id: 7, nome: 'Shorty Vingança de Gaia', raridade: 'Premium', tipoArma: 'Shorty', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/17448E46-4BE1-6F91-BA25-1A9F74A988C6.png' },
  { id: 8, nome: 'Shorty Primordium', raridade: 'Exclusiva', tipoArma: 'Shorty', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/E08406AE-45BB-9065-9EF0-F4B08ACC4CDC.png' },
  { id: 9, nome: 'Frenzy Corrida', raridade: 'Selecionada', tipoArma: 'Frenzy', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/1EE55FE2-49B9-67D3-13C3-6CBF7B8A23EF.png' },
  { id: 10, nome: 'Frenzy Embrasada', raridade: 'Deluxe', tipoArma: 'Frenzy', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/3F76B033-436B-C277-15A2-8DB7B7113DF8.png' },
  { id: 11, nome: 'Frenzy Xenocaçador', raridade: 'Premium', tipoArma: 'Frenzy', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/C1D82E3B-466F-ABC2-E823-FBBFF702A8F2.png' },
  { id: 12, nome: 'Frenzy BlastX', raridade: 'Exclusiva', tipoArma: 'Frenzy', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/93B4ED9C-4E1D-2CB1-709E-C98D8E9E9E9C.png' },
  { id: 13, nome: 'Frenzy Ancifogo', raridade: 'Ultra', tipoArma: 'Frenzy', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/EEE0C458-474A-B80F-871C-C188F3929A79.png' },
  { id: 14, nome: 'Ghost Proteção Fásica', raridade: 'Ultra', tipoArma: 'Ghost', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/8E962A20-4B7E-1BCE-272D-57B76DB8624E.png' },
  { id: 15, nome: 'Sheriff Saqueador', raridade: 'Premium', tipoArma: 'Sheriff', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/C092687F-4AF4-F843-F68B-B989000E240D.png' },
  { id: 16, nome: 'Stinger Oceânica', raridade: 'Selecionada', tipoArma: 'Stinger', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/F130EA97-4A39-9A50-CB54-56993B7D4BBE.png' },
  { id: 17, nome: 'Spectre Reconhecimento', raridade: 'Premium', tipoArma: 'Spectre', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/CD3CEC90-4AC5-C499-A29F-0DBC9E0B8004.png' },
  { id: 18, nome: 'Bucky Kingdom', raridade: 'Deluxe', tipoArma: 'Bucky', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/8BB9C93C-4F27-89F8-3BF7-06B9101DAA85.png' },
  { id: 19, nome: 'Judge Prismática III', raridade: 'Selecionada', tipoArma: 'Judge', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/45EB1C26-4DCD-C53B-E72D-01832D18FEB3.png' },
  { id: 20, nome: 'Bulldog Velocidade', raridade: 'Deluxe', tipoArma: 'Bulldog', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/E4E3AA91-444C-38D4-F485-E9A562D32D95.png' },
  { id: 21, nome: 'Guardian Metalódica', raridade: 'Deluxe', tipoArma: 'Guardian', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/09AD889F-4F6B-038E-9B72-23A8203F393F.png' },
  { id: 22, nome: 'Phantom Neo Oeste', raridade: 'Exclusiva', tipoArma: 'Phantom', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/9663EA87-4FF9-2934-0919-1FB72EE59A9B.png' },
  { id: 23, nome: 'Phantom Oni', raridade: 'Premium', tipoArma: 'Phantom', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/6096A66F-43D2-D4AD-6421-84AEE3386921.png' },
  { id: 24, nome: 'Vandal Proteção Fásica', raridade: 'Ultra', tipoArma: 'Vandal', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/1F8AAF7A-4F41-C8C2-9D7D-1BA3CF469E70.png' },
  { id: 25, nome: 'Vandal Ancifogo', raridade: 'Ultra', tipoArma: 'Vandal', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/835AD8E3-4B0E-071B-CE38-00A05032AC43.png' },
  { id: 26, nome: 'Marshal Soberania', raridade: 'Premium', tipoArma: 'Marshal', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/18C67B9A-419D-AA6D-224F-869F7E541FFF.png' },
  { id: 27, nome: 'Outlaw Araxys', raridade: 'Exclusiva', tipoArma: 'Outlaw', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/03655FD9-4969-1A6F-43FF-13ADE5E6C28B.png' },
  { id: 28, nome: 'Operator Íon', raridade: 'Premium', tipoArma: 'Operator', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/54EA8BA8-4BCB-EB63-70D2-4DA7520FADE2.png' },
  { id: 29, nome: 'Ares Singularidade', raridade: 'Exclusiva', tipoArma: 'Ares', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/E56C230F-447D-034F-FE57-CE935B3F8C55.png' },
  { id: 30, nome: 'Odin Apocalíptica', raridade: 'Exclusiva', tipoArma: 'Odin', imageUrl: 'https://c-valorant-api.op.gg/Assets/WeaponSkins/6D785AE8-4332-9946-E491-368A5FAB442D.png' },
];

export const FILTROS_RARIDADE: (Raridade | 'Todas')[] = [
    'Todas',
    'Selecionada',
    'Deluxe',
    'Premium',
    'Exclusiva',
    'Ultra',
];
export const FILTROS_TIPO_ARMA: (TipoArma | 'Todos')[] = [
    'Todos',
    'Classic',
    'Shorty',
    'Frenzy',
    'Ghost',
    'Sheriff',
    'Stinger',
    'Spectre',
    'Bucky',
    'Judge',
    'Bulldog',
    'Guardian',
    'Phantom',
    'Vandal',
    'Marshal',
    'Outlaw',
    'Operator',
    'Ares',
    'Odin',
    'Melee',
];