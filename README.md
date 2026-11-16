# SetupCraft

> Inspire-se. Monte. Evolua.

O SetupCraft é um aplicativo mobile, feito com React Native e Expo, que funciona como um catálogo visual de inspirações de setups para jogos, estudo, programação e trabalho. O usuário pode pesquisar, filtrar por categoria, ver os equipamentos de cada setup e salvar seus favoritos.

## Aluno

- Nome: Alexandre Mendes Silveira
- RGM: 43932614
- Disciplina: Desenvolvimento Mobile (4º semestre de ADS)

## Tecnologias

- React Native com Expo (SDK 54, template `blank`)
- JavaScript moderno (ES6+)
- React Navigation (`@react-navigation/native` e `@react-navigation/native-stack`)
- `react-native-screens` e `react-native-safe-area-context`
- `@expo/vector-icons` (conjunto Ionicons)

## Telas

1. **Início / Explorar (`Home`)**: marca e slogan, campo de pesquisa, chips de categoria, setups em destaque, lista completa, botão de favoritos com contador e mensagem quando não há resultados.
2. **Detalhes do setup (`SetupDetails`)**: capa ilustrativa, categoria, descrição, finalidade, características, lista de equipamentos, botão de favoritar e botão de voltar. Se o identificador não existir, mostra uma mensagem de erro com botão para voltar.
3. **Meus favoritos (`Favorites`)**: lista dos setups salvos (usando o mesmo `SetupCard` da Home), com opção de remover e estado vazio com atalho para o catálogo.

## Fonte de dados

O catálogo é local, em `data/setups.js` (8 setups, 2 por categoria). Não há API, backend nem login. As capas são ilustrações feitas com componentes do React Native, não fotografias reais, e os equipamentos são descrições genéricas e demonstrativas, sem preços.

## Onde estão os requisitos

| Requisito | Onde verificar |
|---|---|
| Componentes próprios (arquivos separados) | `components/SetupCard.js`, `CategoryChip.js`, `SearchBar.js`, `EmptyState.js`, `FavoriteButton.js`, `EquipmentItem.js`, `SetupCover.js`, `FavoritesBadgeButton.js` |
| Componente reutilizado mais de uma vez | `SetupCard` (Home, destaques e Favoritos); `FavoriteButton` (cartões e detalhes); `EmptyState` (as 3 telas) |
| Props | `SetupCard({ setup, isFavorite, onPress, onToggleFavorite, compact })` |
| Callback por props | `onPress`, `onToggleFavorite` (`SetupCard`), `onSelect` (`CategoryChip`), `onChangeText` e `onClear` (`SearchBar`), `onAction` (`EmptyState`) |
| `useState` | `App.js` (`favorites`) e `screens/HomeScreen.js` (`searchText`, `appliedSearch`, `selectedCategory`) |
| `useEffect` com dependências e limpeza | `screens/HomeScreen.js`: debounce da pesquisa com `setTimeout` e `clearTimeout`, dependência `[searchText]` |
| Navegação com `createNativeStackNavigator` | `App.js` |
| Envio de parâmetros | `navigation.navigate('SetupDetails', { setupId })` em `HomeScreen.js` e `FavoritesScreen.js` |
| Leitura de parâmetros | `route.params` em `screens/SetupDetailsScreen.js` |
| Título de cabeçalho | `options={{ title: 'Detalhes do setup' }}` e `options={{ title: 'Meus favoritos' }}` em `App.js` |
| Dados locais | `data/setups.js` |
| `StyleSheet.create` | Todas as telas e componentes |
| Estados vazios | `EmptyState` na busca sem resultado, nos favoritos vazios e no id inválido |
| Atualização imutável do estado | `toggleFavorite` em `App.js` (`filter` e spread) |

## Como executar

Pré-requisitos: Node.js LTS e o app Expo Go no celular (ou um emulador).

```bash
git clone URL_DO_REPOSITORIO
cd NOME_DA_PASTA
npm install
npx expo install --fix
npx expo start
```

O comando `npx expo install --fix` ajusta as dependências para as versões compatíveis com o SDK do Expo. Depois, leia o QR code com o Expo Go.

### Criando o projeto do zero (alternativa)

```bash
npx create-expo-app SetupCraft --template blank
cd SetupCraft
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context @expo/vector-icons
```

Depois, copie para a pasta criada: `App.js`, `components/`, `screens/`, `data/`, `theme/`, `README.md` e `.gitignore`.

## Vídeo demonstrativo

O vídeo (até 30 segundos, MP4) deve ser adicionado em `demo/demo.mp4`. Ainda não foi gravado.

## Publicação no GitHub

```bash
git init
git add .
git commit -m "Estrutura inicial do SetupCraft"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```
