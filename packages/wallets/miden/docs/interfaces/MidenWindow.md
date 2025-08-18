[**@demox-labs/miden-wallet-adapter-miden**](../README.md)

***

[@demox-labs/miden-wallet-adapter-miden](../globals.md) / MidenWindow

# Interface: MidenWindow

## Extends

- `Window`

## Indexable

\[`index`: `number`\]: `Window`

## Properties

### caches

> `readonly` **caches**: `CacheStorage`

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)

#### Inherited from

`Window.caches`

***

### ~~clientInformation~~

> `readonly` **clientInformation**: `Navigator`

#### Deprecated

This is a legacy alias of `navigator`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

#### Inherited from

`Window.clientInformation`

***

### closed

> `readonly` **closed**: `boolean`

Returns true if the window has been closed, false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/closed)

#### Inherited from

`Window.closed`

***

### crossOriginIsolated

> `readonly` **crossOriginIsolated**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)

#### Inherited from

`Window.crossOriginIsolated`

***

### crypto

> `readonly` **crypto**: `Crypto`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)

#### Inherited from

`Window.crypto`

***

### customElements

> `readonly` **customElements**: `CustomElementRegistry`

Defines a new custom element, mapping the given name to the given constructor as an autonomous custom element.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/customElements)

#### Inherited from

`Window.customElements`

***

### devicePixelRatio

> `readonly` **devicePixelRatio**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)

#### Inherited from

`Window.devicePixelRatio`

***

### document

> `readonly` **document**: `Document`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/document)

#### Inherited from

`Window.document`

***

### ~~event~~

> `readonly` **event**: `Event`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/event)

#### Inherited from

`Window.event`

***

### ~~external~~

> `readonly` **external**: `External`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/external)

#### Inherited from

`Window.external`

***

### frameElement

> `readonly` **frameElement**: `Element`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frameElement)

#### Inherited from

`Window.frameElement`

***

### frames

> `readonly` **frames**: `Window`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frames)

#### Inherited from

`Window.frames`

***

### history

> `readonly` **history**: `History`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/history)

#### Inherited from

`Window.history`

***

### indexedDB

> `readonly` **indexedDB**: `IDBFactory`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)

#### Inherited from

`Window.indexedDB`

***

### innerHeight

> `readonly` **innerHeight**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerHeight)

#### Inherited from

`Window.innerHeight`

***

### innerWidth

> `readonly` **innerWidth**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerWidth)

#### Inherited from

`Window.innerWidth`

***

### isSecureContext

> `readonly` **isSecureContext**: `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)

#### Inherited from

`Window.isSecureContext`

***

### length

> `readonly` **length**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/length)

#### Inherited from

`Window.length`

***

### localStorage

> `readonly` **localStorage**: `Storage`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

#### Inherited from

`Window.localStorage`

***

### locationbar

> `readonly` **locationbar**: `BarProp`

Returns true if the location bar is visible; otherwise, returns false.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/locationbar)

#### Inherited from

`Window.locationbar`

***

### menubar

> `readonly` **menubar**: `BarProp`

Returns true if the menu bar is visible; otherwise, returns false.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/menubar)

#### Inherited from

`Window.menubar`

***

### miden?

> `optional` **miden**: [`MidenWallet`](MidenWallet.md)

***

### midenWallet?

> `optional` **midenWallet**: [`MidenWallet`](MidenWallet.md)

***

### name

> **name**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/name)

#### Inherited from

`Window.name`

***

### navigator

> `readonly` **navigator**: `Navigator`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

#### Inherited from

`Window.navigator`

***

### onabort()

> **onabort**: (`this`, `ev`) => `any`

Fires when the user aborts the download.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`UIEvent`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Returns

`any`

#### Inherited from

`Window.onabort`

***

### onafterprint()

> **onafterprint**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onafterprint`

***

### onanimationcancel()

> **onanimationcancel**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationcancel`

***

### onanimationend()

> **onanimationend**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationend`

***

### onanimationiteration()

> **onanimationiteration**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationiteration`

***

### onanimationstart()

> **onanimationstart**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`AnimationEvent`

#### Returns

`any`

#### Inherited from

`Window.onanimationstart`

***

### onauxclick()

> **onauxclick**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onauxclick`

***

### onbeforeinput()

> **onbeforeinput**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`InputEvent`

#### Returns

`any`

#### Inherited from

`Window.onbeforeinput`

***

### onbeforeprint()

> **onbeforeprint**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onbeforeprint`

***

### onbeforetoggle()

> **onbeforetoggle**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onbeforetoggle`

***

### onbeforeunload()

> **onbeforeunload**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`BeforeUnloadEvent`

#### Returns

`any`

#### Inherited from

`Window.onbeforeunload`

***

### onblur()

> **onblur**: (`this`, `ev`) => `any`

Fires when the object loses the input focus.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FocusEvent`

The focus event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)

#### Returns

`any`

#### Inherited from

`Window.onblur`

***

### oncancel()

> **oncancel**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/cancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncancel`

***

### oncanplay()

> **oncanplay**: (`this`, `ev`) => `any`

Occurs when playback is possible, but would require further buffering.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

#### Returns

`any`

#### Inherited from

`Window.oncanplay`

***

### oncanplaythrough()

> **oncanplaythrough**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncanplaythrough`

***

### onchange()

> **onchange**: (`this`, `ev`) => `any`

Fires when the contents of the object or selection have changed.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

#### Returns

`any`

#### Inherited from

`Window.onchange`

***

### onclick()

> **onclick**: (`this`, `ev`) => `any`

Fires when the user clicks the left mouse button on the object

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)

#### Returns

`any`

#### Inherited from

`Window.onclick`

***

### onclose()

> **onclose**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onclose`

***

### oncontextlost()

> **oncontextlost**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncontextlost`

***

### oncontextmenu()

> **oncontextmenu**: (`this`, `ev`) => `any`

Fires when the user clicks the right mouse button in the client area, opening the context menu.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

#### Returns

`any`

#### Inherited from

`Window.oncontextmenu`

***

### oncontextrestored()

> **oncontextrestored**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncontextrestored`

***

### oncopy()

> **oncopy**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ClipboardEvent`

#### Returns

`any`

#### Inherited from

`Window.oncopy`

***

### oncuechange()

> **oncuechange**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oncuechange`

***

### oncut()

> **oncut**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ClipboardEvent`

#### Returns

`any`

#### Inherited from

`Window.oncut`

***

### ondblclick()

> **ondblclick**: (`this`, `ev`) => `any`

Fires when the user double-clicks the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

#### Returns

`any`

#### Inherited from

`Window.ondblclick`

***

### ondevicemotion()

> **ondevicemotion**: (`this`, `ev`) => `any`

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)

#### Parameters

##### this

`Window`

##### ev

`DeviceMotionEvent`

#### Returns

`any`

#### Inherited from

`Window.ondevicemotion`

***

### ondeviceorientation()

> **ondeviceorientation**: (`this`, `ev`) => `any`

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)

#### Parameters

##### this

`Window`

##### ev

`DeviceOrientationEvent`

#### Returns

`any`

#### Inherited from

`Window.ondeviceorientation`

***

### ondeviceorientationabsolute()

> **ondeviceorientationabsolute**: (`this`, `ev`) => `any`

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientationabsolute_event)

#### Parameters

##### this

`Window`

##### ev

`DeviceOrientationEvent`

#### Returns

`any`

#### Inherited from

`Window.ondeviceorientationabsolute`

***

### ondrag()

> **ondrag**: (`this`, `ev`) => `any`

Fires on the source object continuously during a drag operation.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

#### Returns

`any`

#### Inherited from

`Window.ondrag`

***

### ondragend()

> **ondragend**: (`this`, `ev`) => `any`

Fires on the source object when the user releases the mouse at the close of a drag operation.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

#### Returns

`any`

#### Inherited from

`Window.ondragend`

***

### ondragenter()

> **ondragenter**: (`this`, `ev`) => `any`

Fires on the target element when the user drags the object to a valid drop target.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

#### Returns

`any`

#### Inherited from

`Window.ondragenter`

***

### ondragleave()

> **ondragleave**: (`this`, `ev`) => `any`

Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The drag event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

#### Returns

`any`

#### Inherited from

`Window.ondragleave`

***

### ondragover()

> **ondragover**: (`this`, `ev`) => `any`

Fires on the target element continuously while the user drags the object over a valid drop target.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

#### Returns

`any`

#### Inherited from

`Window.ondragover`

***

### ondragstart()

> **ondragstart**: (`this`, `ev`) => `any`

Fires on the source object when the user starts to drag a text selection or selected object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

#### Returns

`any`

#### Inherited from

`Window.ondragstart`

***

### ondrop()

> **ondrop**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`DragEvent`

#### Returns

`any`

#### Inherited from

`Window.ondrop`

***

### ondurationchange()

> **ondurationchange**: (`this`, `ev`) => `any`

Occurs when the duration attribute is updated.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

#### Returns

`any`

#### Inherited from

`Window.ondurationchange`

***

### onemptied()

> **onemptied**: (`this`, `ev`) => `any`

Occurs when the media element is reset to its initial state.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

#### Returns

`any`

#### Inherited from

`Window.onemptied`

***

### onended()

> **onended**: (`this`, `ev`) => `any`

Occurs when the end of playback is reached.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

#### Returns

`any`

#### Inherited from

`Window.onended`

***

### onerror

> **onerror**: `OnErrorEventHandlerNonNull`

Fires when an error occurs during object loading.

#### Param

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

#### Inherited from

`Window.onerror`

***

### onfocus()

> **onfocus**: (`this`, `ev`) => `any`

Fires when the object receives focus.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FocusEvent`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)

#### Returns

`any`

#### Inherited from

`Window.onfocus`

***

### onformdata()

> **onformdata**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`FormDataEvent`

#### Returns

`any`

#### Inherited from

`Window.onformdata`

***

### ongamepadconnected()

> **ongamepadconnected**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`GamepadEvent`

#### Returns

`any`

#### Inherited from

`Window.ongamepadconnected`

***

### ongamepaddisconnected()

> **ongamepaddisconnected**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`GamepadEvent`

#### Returns

`any`

#### Inherited from

`Window.ongamepaddisconnected`

***

### ongotpointercapture()

> **ongotpointercapture**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.ongotpointercapture`

***

### onhashchange()

> **onhashchange**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`HashChangeEvent`

#### Returns

`any`

#### Inherited from

`Window.onhashchange`

***

### oninput()

> **oninput**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oninput`

***

### oninvalid()

> **oninvalid**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.oninvalid`

***

### onkeydown()

> **onkeydown**: (`this`, `ev`) => `any`

Fires when the user presses a key.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

#### Returns

`any`

#### Inherited from

`Window.onkeydown`

***

### ~~onkeypress()~~

> **onkeypress**: (`this`, `ev`) => `any`

Fires when the user presses an alphanumeric key.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

The event.

#### Returns

`any`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

#### Inherited from

`Window.onkeypress`

***

### onkeyup()

> **onkeyup**: (`this`, `ev`) => `any`

Fires when the user releases a key.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`KeyboardEvent`

The keyboard event

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

#### Returns

`any`

#### Inherited from

`Window.onkeyup`

***

### onlanguagechange()

> **onlanguagechange**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onlanguagechange`

***

### onload()

> **onload**: (`this`, `ev`) => `any`

Fires immediately after the browser loads the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/SVGElement/load_event)

#### Returns

`any`

#### Inherited from

`Window.onload`

***

### onloadeddata()

> **onloadeddata**: (`this`, `ev`) => `any`

Occurs when media data is loaded at the current playback position.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

#### Returns

`any`

#### Inherited from

`Window.onloadeddata`

***

### onloadedmetadata()

> **onloadedmetadata**: (`this`, `ev`) => `any`

Occurs when the duration and dimensions of the media have been determined.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

#### Returns

`any`

#### Inherited from

`Window.onloadedmetadata`

***

### onloadstart()

> **onloadstart**: (`this`, `ev`) => `any`

Occurs when Internet Explorer begins looking for media data.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

#### Returns

`any`

#### Inherited from

`Window.onloadstart`

***

### onlostpointercapture()

> **onlostpointercapture**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onlostpointercapture`

***

### onmessage()

> **onmessage**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`MessageEvent`

#### Returns

`any`

#### Inherited from

`Window.onmessage`

***

### onmessageerror()

> **onmessageerror**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`MessageEvent`

#### Returns

`any`

#### Inherited from

`Window.onmessageerror`

***

### onmousedown()

> **onmousedown**: (`this`, `ev`) => `any`

Fires when the user clicks the object with either mouse button.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

#### Returns

`any`

#### Inherited from

`Window.onmousedown`

***

### onmouseenter()

> **onmouseenter**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onmouseenter`

***

### onmouseleave()

> **onmouseleave**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

#### Returns

`any`

#### Inherited from

`Window.onmouseleave`

***

### onmousemove()

> **onmousemove**: (`this`, `ev`) => `any`

Fires when the user moves the mouse over the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

#### Returns

`any`

#### Inherited from

`Window.onmousemove`

***

### onmouseout()

> **onmouseout**: (`this`, `ev`) => `any`

Fires when the user moves the mouse pointer outside the boundaries of the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

#### Returns

`any`

#### Inherited from

`Window.onmouseout`

***

### onmouseover()

> **onmouseover**: (`this`, `ev`) => `any`

Fires when the user moves the mouse pointer into the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

#### Returns

`any`

#### Inherited from

`Window.onmouseover`

***

### onmouseup()

> **onmouseup**: (`this`, `ev`) => `any`

Fires when the user releases a mouse button while the mouse is over the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`MouseEvent`

The mouse event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

#### Returns

`any`

#### Inherited from

`Window.onmouseup`

***

### onoffline()

> **onoffline**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onoffline`

***

### ononline()

> **ononline**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.ononline`

***

### ~~onorientationchange()~~

> **onorientationchange**: (`this`, `ev`) => `any`

#### Parameters

##### this

`Window`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)

#### Inherited from

`Window.onorientationchange`

***

### onpagehide()

> **onpagehide**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.onpagehide`

***

### onpageshow()

> **onpageshow**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PageTransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.onpageshow`

***

### onpaste()

> **onpaste**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ClipboardEvent`

#### Returns

`any`

#### Inherited from

`Window.onpaste`

***

### onpause()

> **onpause**: (`this`, `ev`) => `any`

Occurs when playback is paused.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

#### Returns

`any`

#### Inherited from

`Window.onpause`

***

### onplay()

> **onplay**: (`this`, `ev`) => `any`

Occurs when the play method is requested.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

#### Returns

`any`

#### Inherited from

`Window.onplay`

***

### onplaying()

> **onplaying**: (`this`, `ev`) => `any`

Occurs when the audio or video has started playing.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

#### Returns

`any`

#### Inherited from

`Window.onplaying`

***

### onpointercancel()

> **onpointercancel**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointercancel`

***

### onpointerdown()

> **onpointerdown**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerdown`

***

### onpointerenter()

> **onpointerenter**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerenter`

***

### onpointerleave()

> **onpointerleave**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerleave`

***

### onpointermove()

> **onpointermove**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointermove`

***

### onpointerout()

> **onpointerout**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerout`

***

### onpointerover()

> **onpointerover**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerover`

***

### onpointerup()

> **onpointerup**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`PointerEvent`

#### Returns

`any`

#### Inherited from

`Window.onpointerup`

***

### onpopstate()

> **onpopstate**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PopStateEvent`

#### Returns

`any`

#### Inherited from

`Window.onpopstate`

***

### onprogress()

> **onprogress**: (`this`, `ev`) => `any`

Occurs to indicate progress while downloading media data.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`ProgressEvent`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

#### Returns

`any`

#### Inherited from

`Window.onprogress`

***

### onratechange()

> **onratechange**: (`this`, `ev`) => `any`

Occurs when the playback rate is increased or decreased.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

#### Returns

`any`

#### Inherited from

`Window.onratechange`

***

### onrejectionhandled()

> **onrejectionhandled**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`Window.onrejectionhandled`

***

### onreset()

> **onreset**: (`this`, `ev`) => `any`

Fires when the user resets a form.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

#### Returns

`any`

#### Inherited from

`Window.onreset`

***

### onresize()

> **onresize**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`UIEvent`

#### Returns

`any`

#### Inherited from

`Window.onresize`

***

### onscroll()

> **onscroll**: (`this`, `ev`) => `any`

Fires when the user repositions the scroll box in the scroll bar on the object.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

#### Returns

`any`

#### Inherited from

`Window.onscroll`

***

### onscrollend()

> **onscrollend**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onscrollend`

***

### onsecuritypolicyviolation()

> **onsecuritypolicyviolation**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`SecurityPolicyViolationEvent`

#### Returns

`any`

#### Inherited from

`Window.onsecuritypolicyviolation`

***

### onseeked()

> **onseeked**: (`this`, `ev`) => `any`

Occurs when the seek operation ends.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

#### Returns

`any`

#### Inherited from

`Window.onseeked`

***

### onseeking()

> **onseeking**: (`this`, `ev`) => `any`

Occurs when the current playback position is moved.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

#### Returns

`any`

#### Inherited from

`Window.onseeking`

***

### onselect()

> **onselect**: (`this`, `ev`) => `any`

Fires when the current selection changes.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

#### Returns

`any`

#### Inherited from

`Window.onselect`

***

### onselectionchange()

> **onselectionchange**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onselectionchange`

***

### onselectstart()

> **onselectstart**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onselectstart`

***

### onslotchange()

> **onslotchange**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.onslotchange`

***

### onstalled()

> **onstalled**: (`this`, `ev`) => `any`

Occurs when the download has stopped.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

#### Returns

`any`

#### Inherited from

`Window.onstalled`

***

### onstorage()

> **onstorage**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`StorageEvent`

#### Returns

`any`

#### Inherited from

`Window.onstorage`

***

### onsubmit()

> **onsubmit**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`SubmitEvent`

#### Returns

`any`

#### Inherited from

`Window.onsubmit`

***

### onsuspend()

> **onsuspend**: (`this`, `ev`) => `any`

Occurs if the load operation has been intentionally halted.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

#### Returns

`any`

#### Inherited from

`Window.onsuspend`

***

### ontimeupdate()

> **ontimeupdate**: (`this`, `ev`) => `any`

Occurs to indicate the current playback position.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

#### Returns

`any`

#### Inherited from

`Window.ontimeupdate`

***

### ontoggle()

> **ontoggle**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Inherited from

`Window.ontoggle`

***

### ontouchcancel()?

> `optional` **ontouchcancel**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchcancel`

***

### ontouchend()?

> `optional` **ontouchend**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchend`

***

### ontouchmove()?

> `optional` **ontouchmove**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchmove`

***

### ontouchstart()?

> `optional` **ontouchstart**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TouchEvent`

#### Returns

`any`

#### Inherited from

`Window.ontouchstart`

***

### ontransitioncancel()

> **ontransitioncancel**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitioncancel`

***

### ontransitionend()

> **ontransitionend**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionend`

***

### ontransitionrun()

> **ontransitionrun**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionrun`

***

### ontransitionstart()

> **ontransitionstart**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`TransitionEvent`

#### Returns

`any`

#### Inherited from

`Window.ontransitionstart`

***

### onunhandledrejection()

> **onunhandledrejection**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`PromiseRejectionEvent`

#### Returns

`any`

#### Inherited from

`Window.onunhandledrejection`

***

### ~~onunload()~~

> **onunload**: (`this`, `ev`) => `any`

#### Parameters

##### this

`WindowEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)

#### Inherited from

`Window.onunload`

***

### onvolumechange()

> **onvolumechange**: (`this`, `ev`) => `any`

Occurs when the volume is changed, or playback is muted or unmuted.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

#### Returns

`any`

#### Inherited from

`Window.onvolumechange`

***

### onwaiting()

> **onwaiting**: (`this`, `ev`) => `any`

Occurs when playback stops because the next frame of a video resource is not available.

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

The event.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

#### Returns

`any`

#### Inherited from

`Window.onwaiting`

***

### ~~onwebkitanimationend()~~

> **onwebkitanimationend**: (`this`, `ev`) => `any`

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

`Window.onwebkitanimationend`

***

### ~~onwebkitanimationiteration()~~

> **onwebkitanimationiteration**: (`this`, `ev`) => `any`

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationiteration`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

`Window.onwebkitanimationiteration`

***

### ~~onwebkitanimationstart()~~

> **onwebkitanimationstart**: (`this`, `ev`) => `any`

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `onanimationstart`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

`Window.onwebkitanimationstart`

***

### ~~onwebkittransitionend()~~

> **onwebkittransitionend**: (`this`, `ev`) => `any`

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`Event`

#### Returns

`any`

#### Deprecated

This is a legacy alias of `ontransitionend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

`Window.onwebkittransitionend`

***

### onwheel()

> **onwheel**: (`this`, `ev`) => `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

#### Parameters

##### this

`GlobalEventHandlers`

##### ev

`WheelEvent`

#### Returns

`any`

#### Inherited from

`Window.onwheel`

***

### opener

> **opener**: `any`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/opener)

#### Inherited from

`Window.opener`

***

### ~~orientation~~

> `readonly` **orientation**: `number`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientation)

#### Inherited from

`Window.orientation`

***

### origin

> `readonly` **origin**: `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)

#### Inherited from

`Window.origin`

***

### outerHeight

> `readonly` **outerHeight**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerHeight)

#### Inherited from

`Window.outerHeight`

***

### outerWidth

> `readonly` **outerWidth**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerWidth)

#### Inherited from

`Window.outerWidth`

***

### ~~pageXOffset~~

> `readonly` **pageXOffset**: `number`

#### Deprecated

This is a legacy alias of `scrollX`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

#### Inherited from

`Window.pageXOffset`

***

### ~~pageYOffset~~

> `readonly` **pageYOffset**: `number`

#### Deprecated

This is a legacy alias of `scrollY`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

#### Inherited from

`Window.pageYOffset`

***

### parent

> `readonly` **parent**: `Window`

Refers to either the parent WindowProxy, or itself.

It can rarely be null e.g. for contentWindow of an iframe that is already removed from the parent.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/parent)

#### Inherited from

`Window.parent`

***

### performance

> `readonly` **performance**: `Performance`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)

#### Inherited from

`Window.performance`

***

### personalbar

> `readonly` **personalbar**: `BarProp`

Returns true if the personal bar is visible; otherwise, returns false.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/personalbar)

#### Inherited from

`Window.personalbar`

***

### screen

> `readonly` **screen**: `Screen`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screen)

#### Inherited from

`Window.screen`

***

### screenLeft

> `readonly` **screenLeft**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenLeft)

#### Inherited from

`Window.screenLeft`

***

### screenTop

> `readonly` **screenTop**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenTop)

#### Inherited from

`Window.screenTop`

***

### screenX

> `readonly` **screenX**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenX)

#### Inherited from

`Window.screenX`

***

### screenY

> `readonly` **screenY**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenY)

#### Inherited from

`Window.screenY`

***

### scrollbars

> `readonly` **scrollbars**: `BarProp`

Returns true if the scrollbars are visible; otherwise, returns false.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollbars)

#### Inherited from

`Window.scrollbars`

***

### scrollX

> `readonly` **scrollX**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

#### Inherited from

`Window.scrollX`

***

### scrollY

> `readonly` **scrollY**: `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

#### Inherited from

`Window.scrollY`

***

### self

> `readonly` **self**: `Window` & *typeof* `globalThis`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/self)

#### Inherited from

`Window.self`

***

### sessionStorage

> `readonly` **sessionStorage**: `Storage`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)

#### Inherited from

`Window.sessionStorage`

***

### speechSynthesis

> `readonly` **speechSynthesis**: `SpeechSynthesis`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/speechSynthesis)

#### Inherited from

`Window.speechSynthesis`

***

### ~~status~~

> **status**: `string`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/status)

#### Inherited from

`Window.status`

***

### statusbar

> `readonly` **statusbar**: `BarProp`

Returns true if the status bar is visible; otherwise, returns false.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/statusbar)

#### Inherited from

`Window.statusbar`

***

### toolbar

> `readonly` **toolbar**: `BarProp`

Returns true if the toolbar is visible; otherwise, returns false.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/toolbar)

#### Inherited from

`Window.toolbar`

***

### top

> `readonly` **top**: `Window`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/top)

#### Inherited from

`Window.top`

***

### visualViewport

> `readonly` **visualViewport**: `VisualViewport`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/visualViewport)

#### Inherited from

`Window.visualViewport`

***

### window

> `readonly` **window**: `Window` & *typeof* `globalThis`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/window)

#### Inherited from

`Window.window`

## Accessors

### location

#### Get Signature

> **get** **location**(): `Location`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/location)

##### Returns

`Location`

#### Set Signature

> **set** **location**(`href`): `void`

##### Parameters

###### href

`string` | `Location`

##### Returns

`void`

#### Inherited from

`Window.location`

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

• **K** *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `listener`, `options`?): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `AddEventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.addEventListener`

***

### alert()

> **alert**(`message`?): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/alert)

#### Parameters

##### message?

`any`

#### Returns

`void`

#### Inherited from

`Window.alert`

***

### atob()

> **atob**(`data`): `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`Window.atob`

***

### ~~blur()~~

> **blur**(): `void`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/blur)

#### Inherited from

`Window.blur`

***

### btoa()

> **btoa**(`data`): `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`Window.btoa`

***

### cancelAnimationFrame()

> **cancelAnimationFrame**(`handle`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)

#### Parameters

##### handle

`number`

#### Returns

`void`

#### Inherited from

`Window.cancelAnimationFrame`

***

### cancelIdleCallback()

> **cancelIdleCallback**(`handle`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback)

#### Parameters

##### handle

`number`

#### Returns

`void`

#### Inherited from

`Window.cancelIdleCallback`

***

### ~~captureEvents()~~

> **captureEvents**(): `void`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/captureEvents)

#### Inherited from

`Window.captureEvents`

***

### clearInterval()

> **clearInterval**(`id`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/clearInterval)

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

`Window.clearInterval`

***

### clearTimeout()

> **clearTimeout**(`id`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/clearTimeout)

#### Parameters

##### id

`number`

#### Returns

`void`

#### Inherited from

`Window.clearTimeout`

***

### close()

> **close**(): `void`

Closes the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/close)

#### Returns

`void`

#### Inherited from

`Window.close`

***

### confirm()

> **confirm**(`message`?): `boolean`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/confirm)

#### Parameters

##### message?

`string`

#### Returns

`boolean`

#### Inherited from

`Window.confirm`

***

### createImageBitmap()

#### Call Signature

> **createImageBitmap**(`image`, `options`?): `Promise`\<`ImageBitmap`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/createImageBitmap)

##### Parameters

###### image

`ImageBitmapSource`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`Window.createImageBitmap`

#### Call Signature

> **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options`?): `Promise`\<`ImageBitmap`\>

##### Parameters

###### image

`ImageBitmapSource`

###### sx

`number`

###### sy

`number`

###### sw

`number`

###### sh

`number`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`Window.createImageBitmap`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

`Window.dispatchEvent`

***

### fetch()

> **fetch**(`input`, `init`?): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`URL` | `RequestInfo`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

`Window.fetch`

***

### focus()

> **focus**(): `void`

Moves the focus to the window's browsing context, if any.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/focus)

#### Returns

`void`

#### Inherited from

`Window.focus`

***

### getComputedStyle()

> **getComputedStyle**(`elt`, `pseudoElt`?): `CSSStyleDeclaration`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)

#### Parameters

##### elt

`Element`

##### pseudoElt?

`string`

#### Returns

`CSSStyleDeclaration`

#### Inherited from

`Window.getComputedStyle`

***

### getSelection()

> **getSelection**(): `Selection`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getSelection)

#### Returns

`Selection`

#### Inherited from

`Window.getSelection`

***

### matchMedia()

> **matchMedia**(`query`): `MediaQueryList`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)

#### Parameters

##### query

`string`

#### Returns

`MediaQueryList`

#### Inherited from

`Window.matchMedia`

***

### moveBy()

> **moveBy**(`x`, `y`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`Window.moveBy`

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveTo)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`Window.moveTo`

***

### open()

> **open**(`url`?, `target`?, `features`?): `Window`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/open)

#### Parameters

##### url?

`string` | `URL`

##### target?

`string`

##### features?

`string`

#### Returns

`Window`

#### Inherited from

`Window.open`

***

### postMessage()

#### Call Signature

> **postMessage**(`message`, `targetOrigin`, `transfer`?): `void`

Posts a message to the given window. Messages can be structured objects, e.g. nested objects and arrays, can contain JavaScript values (strings, numbers, Date objects, etc), and can contain certain data objects such as File Blob, FileList, and ArrayBuffer objects.

Objects listed in the transfer member of options are transferred, not just cloned, meaning that they are no longer usable on the sending side.

A target origin can be specified using the targetOrigin member of options. If not provided, it defaults to "/". This default restricts the message to same-origin targets only.

If the origin of the target window doesn't match the given target origin, the message is discarded, to avoid information leakage. To send the message to the target regardless of origin, set the target origin to "*".

Throws a "DataCloneError" DOMException if transfer array contains duplicate objects or if message could not be cloned.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/postMessage)

##### Parameters

###### message

`any`

###### targetOrigin

`string`

###### transfer?

`Transferable`[]

##### Returns

`void`

##### Inherited from

`Window.postMessage`

#### Call Signature

> **postMessage**(`message`, `options`?): `void`

##### Parameters

###### message

`any`

###### options?

`WindowPostMessageOptions`

##### Returns

`void`

##### Inherited from

`Window.postMessage`

***

### print()

> **print**(): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/print)

#### Returns

`void`

#### Inherited from

`Window.print`

***

### prompt()

> **prompt**(`message`?, `_default`?): `string`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/prompt)

#### Parameters

##### message?

`string`

##### \_default?

`string`

#### Returns

`string`

#### Inherited from

`Window.prompt`

***

### queueMicrotask()

> **queueMicrotask**(`callback`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/queueMicrotask)

#### Parameters

##### callback

`VoidFunction`

#### Returns

`void`

#### Inherited from

`Window.queueMicrotask`

***

### ~~releaseEvents()~~

> **releaseEvents**(): `void`

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/releaseEvents)

#### Inherited from

`Window.releaseEvents`

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

• **K** *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options`?): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` | `EventListenerOptions`

##### Returns

`void`

##### Inherited from

`Window.removeEventListener`

***

### reportError()

> **reportError**(`e`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/reportError)

#### Parameters

##### e

`any`

#### Returns

`void`

#### Inherited from

`Window.reportError`

***

### requestAnimationFrame()

> **requestAnimationFrame**(`callback`): `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

#### Parameters

##### callback

`FrameRequestCallback`

#### Returns

`number`

#### Inherited from

`Window.requestAnimationFrame`

***

### requestIdleCallback()

> **requestIdleCallback**(`callback`, `options`?): `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback)

#### Parameters

##### callback

`IdleRequestCallback`

##### options?

`IdleRequestOptions`

#### Returns

`number`

#### Inherited from

`Window.requestIdleCallback`

***

### resizeBy()

> **resizeBy**(`x`, `y`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Inherited from

`Window.resizeBy`

***

### resizeTo()

> **resizeTo**(`width`, `height`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeTo)

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

#### Inherited from

`Window.resizeTo`

***

### scroll()

#### Call Signature

> **scroll**(`options`?): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scroll)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scroll`

#### Call Signature

> **scroll**(`x`, `y`): `void`

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

##### Inherited from

`Window.scroll`

***

### scrollBy()

#### Call Signature

> **scrollBy**(`options`?): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollBy)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scrollBy`

#### Call Signature

> **scrollBy**(`x`, `y`): `void`

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

##### Inherited from

`Window.scrollBy`

***

### scrollTo()

#### Call Signature

> **scrollTo**(`options`?): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollTo)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

##### Inherited from

`Window.scrollTo`

#### Call Signature

> **scrollTo**(`x`, `y`): `void`

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

##### Inherited from

`Window.scrollTo`

***

### setInterval()

> **setInterval**(`handler`, `timeout`?, ...`arguments`?): `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/setInterval)

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments?

...`any`[]

#### Returns

`number`

#### Inherited from

`Window.setInterval`

***

### setTimeout()

> **setTimeout**(`handler`, `timeout`?, ...`arguments`?): `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/setTimeout)

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments?

...`any`[]

#### Returns

`number`

#### Inherited from

`Window.setTimeout`

***

### stop()

> **stop**(): `void`

Cancels the document load.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/stop)

#### Returns

`void`

#### Inherited from

`Window.stop`

***

### structuredClone()

> **structuredClone**\<`T`\>(`value`, `options`?): `T`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/structuredClone)

#### Type Parameters

• **T** = `any`

#### Parameters

##### value

`T`

##### options?

`StructuredSerializeOptions`

#### Returns

`T`

#### Inherited from

`Window.structuredClone`
