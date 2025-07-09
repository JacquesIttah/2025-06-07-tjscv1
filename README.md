# React + TypeScript + Vite

## exercice 1

mettre en place lors de la souission du formulaire, l'execution dans MemeForm, une fontion recevant le meme actuel, provenant des props

```javascript
interface IMemeFormProps {
  meme: MemeInterface;
  onMemeChange(m: MemeInterface): undefined;
  images: ImageInterface[]; //Array<ImageInterface>

  onMemeSave(meme: MemeInterface): undefined;
}
```

cette fonction devra etre déclenchée lors de la soumission du formulaire

```javascript
[...]
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          onMemeSave(meme);
        }}
      >
[...]

```

---

## exercice 2

Dans MemeForm connected creer la connexion et traitement et l'envoie a MemeForm de la fonction onMemeSave

```javascript
...
  <UnconnectedMemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(m) => {
        dispatch(update(m));
      }}
      onMemeSave={(meme)=>{

      }}
    />
...
```

son role sera de faire un dispatch de la fonction présente dans <i>asyncCaller.ts</i> a recupérer sur la repos
<br/>
liens du fichier [asyncCaller.ts](https://github.com/champix56/2025-06-07-tjscv1/blob/master/src/store/asyncCaller.ts)


```javascript
export const saveMeme = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const prm = await fetch(
      `${REST_URL}/meme${meme.id !== undefined ? `/${meme.id}` : ""}`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(meme),
      }
    );
    return await prm.json();
  }
);
```
vous observerez que le log de json-server affiche bien:
```
PUT /memes/0 200 20.926 ms - -

ou

POST /memes 201 20.926 ms - -
```
en fonction du eme qui est sauvegarder (POST = nouveau, PUT = deja existant)

## exercice 3

un fois l'enregistrement fonctionnel, vous mettrez a jour l'etat du courrant grace a une extra builder sur la tranche courrante

```javascript
import { saveMeme } from "./asyncCaller";

[...]

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    update: (state, action: { type: string; payload: MemeInterface }) => {
      state.meme = action.payload;
    },
    clear: (state) => {
      state.meme = emptyMeme;
    },
  },
  extraReducers(builder) {
      builder.addCase(saveMeme.fulfilled,(state,action)=>{
        //mettre a jour le courrant avec ce qui est recu de l'asyncThunk
      })
  },
});

[...]
```

une fois le courrant mis a jour, vous mettrez a jour la liste des memes. Si c'est un meme innexistant dans la liste, vous l'ajouterez dans la liste et si il existe deja vous le remplacerez par la nouvelle version recu par le asyncThunk

pour ajouter a la liste vous devrez gerer le extraReducer de la trance ressources dans src/tore/ressources.tsx
```typescript
import { saveMeme } from "./asyncCaller";
[...]
const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadAsyncRessources.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.memes = action.payload.memes;
    });
    builder.addCase(saveMeme.fulfilled, (state, action) => {
      //gerer l'ajout ou le remplacement

    });
  },
});
[...]
```

l'ensemble du code corriger se trouve sur la branche routage de la repos [branche routage](https://github.com/champix56/2025-06-07-tjscv1/tree/routage)