/******/ var __webpack_modules__ = {
  /***/ '../../core/base/dist/adapter.js':
    /*!***************************************!*\
  !*** ../../core/base/dist/adapter.js ***!
  \***************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ BaseWalletAdapter: () =>
          /* binding */ BaseWalletAdapter,
        /* harmony export */ WalletReadyState: () =>
          /* binding */ WalletReadyState,
        /* harmony export */ scopePollingDetectionStrategy: () =>
          /* binding */ scopePollingDetectionStrategy,
        /* harmony export */
      });
      Object(
        (function webpackMissingModule() {
          var e = new Error("Cannot find module 'eventemitter3'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()
      );

      /**
       * A wallet's readiness describes a series of states that the wallet can be in,
       * depending on what kind of wallet it is. An installable wallet (eg. a browser
       * extension like Phantom) might be `Installed` if we've found the Phantom API
       * in the global scope, or `NotDetected` otherwise. A loadable, zero-install
       * runtime (eg. Torus Wallet) might simply signal that it's `Loadable`. Use this
       * metadata to personalize the wallet list for each user (eg. to show their
       * installed wallets first).
       */
      var WalletReadyState;
      (function (WalletReadyState) {
        /**
         * User-installable wallets can typically be detected by scanning for an API
         * that they've injected into the global context. If such an API is present,
         * we consider the wallet to have been installed.
         */
        WalletReadyState['Installed'] = 'Installed';
        WalletReadyState['NotDetected'] = 'NotDetected';
        /**
         * Loadable wallets are always available to you. Since you can load them at
         * any time, it's meaningless to say that they have been detected.
         */
        WalletReadyState['Loadable'] = 'Loadable';
        /**
         * If a wallet is not supported on a given platform (eg. server-rendering, or
         * mobile) then it will stay in the `Unsupported` state.
         */
        WalletReadyState['Unsupported'] = 'Unsupported';
      })(WalletReadyState || (WalletReadyState = {}));
      class BaseWalletAdapter extends Object(
        (function webpackMissingModule() {
          var e = new Error("Cannot find module 'eventemitter3'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        })()
      ) {
        get connected() {
          return !!this.publicKey;
        }
      }
      function scopePollingDetectionStrategy(detect) {
        // Early return when server-side rendering
        if (typeof window === 'undefined' || typeof document === 'undefined')
          return;
        const disposers = [];
        function detectAndDispose() {
          const detected = detect();
          if (detected) {
            for (const dispose of disposers) {
              dispose();
            }
          }
        }
        // Strategy #1: Try detecting every second.
        const interval =
          // TODO: #334 Replace with idle callback strategy.
          setInterval(detectAndDispose, 1000);
        disposers.push(() => clearInterval(interval));
        // Strategy #2: Detect as soon as the DOM becomes 'ready'/'interactive'.
        if (
          // Implies that `DOMContentLoaded` has not yet fired.
          document.readyState === 'loading'
        ) {
          document.addEventListener('DOMContentLoaded', detectAndDispose, {
            once: true,
          });
          disposers.push(() =>
            document.removeEventListener('DOMContentLoaded', detectAndDispose)
          );
        }
        // Strategy #3: Detect after the `window` has fully loaded.
        if (
          // If the `complete` state has been reached, we're too late.
          document.readyState !== 'complete'
        ) {
          window.addEventListener('load', detectAndDispose, { once: true });
          disposers.push(() =>
            window.removeEventListener('load', detectAndDispose)
          );
        }
        // Strategy #4: Detect synchronously, now.
        detectAndDispose();
      }
      //# sourceMappingURL=adapter.js.map

      /***/
    },

  /***/ '../../core/base/dist/deployment.js':
    /*!******************************************!*\
  !*** ../../core/base/dist/deployment.js ***!
  \******************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Deployment: () => /* binding */ Deployment,
        /* harmony export */
      });
      class Deployment {
        address;
        chainId;
        program;
        fee;
        feePrivate;
        constructor(address, chainId, program, fee, feePrivate = true) {
          this.address = address;
          this.chainId = chainId;
          this.program = program;
          this.fee = fee;
          this.feePrivate = feePrivate;
        }
      }
      //# sourceMappingURL=deployment.js.map

      /***/
    },

  /***/ '../../core/base/dist/errors.js':
    /*!**************************************!*\
  !*** ../../core/base/dist/errors.js ***!
  \**************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ WalletAccountError: () =>
          /* binding */ WalletAccountError,
        /* harmony export */ WalletConfigError: () =>
          /* binding */ WalletConfigError,
        /* harmony export */ WalletConnectionError: () =>
          /* binding */ WalletConnectionError,
        /* harmony export */ WalletDecryptionError: () =>
          /* binding */ WalletDecryptionError,
        /* harmony export */ WalletDecryptionNotAllowedError: () =>
          /* binding */ WalletDecryptionNotAllowedError,
        /* harmony export */ WalletDisconnectedError: () =>
          /* binding */ WalletDisconnectedError,
        /* harmony export */ WalletDisconnectionError: () =>
          /* binding */ WalletDisconnectionError,
        /* harmony export */ WalletError: () => /* binding */ WalletError,
        /* harmony export */ WalletKeypairError: () =>
          /* binding */ WalletKeypairError,
        /* harmony export */ WalletLoadError: () =>
          /* binding */ WalletLoadError,
        /* harmony export */ WalletNotConnectedError: () =>
          /* binding */ WalletNotConnectedError,
        /* harmony export */ WalletNotReadyError: () =>
          /* binding */ WalletNotReadyError,
        /* harmony export */ WalletNotSelectedError: () =>
          /* binding */ WalletNotSelectedError,
        /* harmony export */ WalletPublicKeyError: () =>
          /* binding */ WalletPublicKeyError,
        /* harmony export */ WalletRecordsError: () =>
          /* binding */ WalletRecordsError,
        /* harmony export */ WalletSendTransactionError: () =>
          /* binding */ WalletSendTransactionError,
        /* harmony export */ WalletSignMessageError: () =>
          /* binding */ WalletSignMessageError,
        /* harmony export */ WalletSignTransactionError: () =>
          /* binding */ WalletSignTransactionError,
        /* harmony export */ WalletTimeoutError: () =>
          /* binding */ WalletTimeoutError,
        /* harmony export */ WalletTransactionError: () =>
          /* binding */ WalletTransactionError,
        /* harmony export */ WalletWindowBlockedError: () =>
          /* binding */ WalletWindowBlockedError,
        /* harmony export */ WalletWindowClosedError: () =>
          /* binding */ WalletWindowClosedError,
        /* harmony export */
      });
      class WalletError extends Error {
        error;
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        constructor(message, error) {
          super(message);
          this.error = error;
        }
      }
      class WalletNotReadyError extends WalletError {
        name = 'WalletNotReadyError';
      }
      class WalletLoadError extends WalletError {
        name = 'WalletLoadError';
      }
      class WalletConfigError extends WalletError {
        name = 'WalletConfigError';
      }
      class WalletConnectionError extends WalletError {
        name = 'WalletConnectionError';
      }
      class WalletNotSelectedError extends WalletError {
        name = 'WalletNotSelectedError';
      }
      class WalletDisconnectedError extends WalletError {
        name = 'WalletDisconnectedError';
      }
      class WalletDisconnectionError extends WalletError {
        name = 'WalletDisconnectionError';
      }
      class WalletAccountError extends WalletError {
        name = 'WalletAccountError';
      }
      class WalletPublicKeyError extends WalletError {
        name = 'WalletPublicKeyError';
      }
      class WalletKeypairError extends WalletError {
        name = 'WalletKeypairError';
      }
      class WalletNotConnectedError extends WalletError {
        name = 'WalletNotConnectedError';
      }
      class WalletSendTransactionError extends WalletError {
        name = 'WalletSendTransactionError';
      }
      class WalletSignMessageError extends WalletError {
        name = 'WalletSignMessageError';
      }
      class WalletSignTransactionError extends WalletError {
        name = 'WalletSignTransactionError';
      }
      class WalletTimeoutError extends WalletError {
        name = 'WalletTimeoutError';
      }
      class WalletWindowBlockedError extends WalletError {
        name = 'WalletWindowBlockedError';
      }
      class WalletWindowClosedError extends WalletError {
        name = 'WalletWindowClosedError';
      }
      class WalletDecryptionNotAllowedError extends WalletError {
        name = 'WalletDecryptionNotAllowedError';
      }
      class WalletDecryptionError extends WalletError {
        name = 'WalletDecryptionError';
      }
      class WalletRecordsError extends WalletError {
        name = 'WalletRecordsError';
      }
      class WalletTransactionError extends WalletError {
        name = 'WalletTransactionError';
      }
      //# sourceMappingURL=errors.js.map

      /***/
    },

  /***/ '../../core/base/dist/index.js':
    /*!*************************************!*\
  !*** ../../core/base/dist/index.js ***!
  \*************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ BaseMessageSignerWalletAdapter: () =>
          /* reexport safe */ _signer__WEBPACK_IMPORTED_MODULE_2__.BaseMessageSignerWalletAdapter,
        /* harmony export */ BaseSignerWalletAdapter: () =>
          /* reexport safe */ _signer__WEBPACK_IMPORTED_MODULE_2__.BaseSignerWalletAdapter,
        /* harmony export */ BaseWalletAdapter: () =>
          /* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter,
        /* harmony export */ DecryptPermission: () =>
          /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.DecryptPermission,
        /* harmony export */ Deployment: () =>
          /* reexport safe */ _deployment__WEBPACK_IMPORTED_MODULE_5__.Deployment,
        /* harmony export */ Transaction: () =>
          /* reexport safe */ _transaction__WEBPACK_IMPORTED_MODULE_4__.Transaction,
        /* harmony export */ Transition: () =>
          /* reexport safe */ _transaction__WEBPACK_IMPORTED_MODULE_4__.Transition,
        /* harmony export */ WalletAccountError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError,
        /* harmony export */ WalletAdapterNetwork: () =>
          /* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork,
        /* harmony export */ WalletConfigError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletConfigError,
        /* harmony export */ WalletConnectionError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletConnectionError,
        /* harmony export */ WalletDecryptionError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDecryptionError,
        /* harmony export */ WalletDecryptionNotAllowedError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDecryptionNotAllowedError,
        /* harmony export */ WalletDisconnectedError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectedError,
        /* harmony export */ WalletDisconnectionError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectionError,
        /* harmony export */ WalletError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletError,
        /* harmony export */ WalletKeypairError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletKeypairError,
        /* harmony export */ WalletLoadError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletLoadError,
        /* harmony export */ WalletNotConnectedError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError,
        /* harmony export */ WalletNotReadyError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotReadyError,
        /* harmony export */ WalletNotSelectedError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError,
        /* harmony export */ WalletPublicKeyError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletPublicKeyError,
        /* harmony export */ WalletReadyState: () =>
          /* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState,
        /* harmony export */ WalletRecordsError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletRecordsError,
        /* harmony export */ WalletSendTransactionError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSendTransactionError,
        /* harmony export */ WalletSignMessageError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSignMessageError,
        /* harmony export */ WalletSignTransactionError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletSignTransactionError,
        /* harmony export */ WalletTimeoutError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletTimeoutError,
        /* harmony export */ WalletTransactionError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletTransactionError,
        /* harmony export */ WalletWindowBlockedError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletWindowBlockedError,
        /* harmony export */ WalletWindowClosedError: () =>
          /* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.WalletWindowClosedError,
        /* harmony export */ scopePollingDetectionStrategy: () =>
          /* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.scopePollingDetectionStrategy,
        /* harmony export */
      });
      /* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! ./adapter */ '../../core/base/dist/adapter.js');
      /* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! ./errors */ '../../core/base/dist/errors.js');
      /* harmony import */ var _signer__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! ./signer */ '../../core/base/dist/signer.js');
      /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! ./types */ '../../core/base/dist/types.js');
      /* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(
          /*! ./transaction */ '../../core/base/dist/transaction.js'
        );
      /* harmony import */ var _deployment__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(
          /*! ./deployment */ '../../core/base/dist/deployment.js'
        );

      //# sourceMappingURL=index.js.map

      /***/
    },

  /***/ '../../core/base/dist/signer.js':
    /*!**************************************!*\
  !*** ../../core/base/dist/signer.js ***!
  \**************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ BaseMessageSignerWalletAdapter: () =>
          /* binding */ BaseMessageSignerWalletAdapter,
        /* harmony export */ BaseSignerWalletAdapter: () =>
          /* binding */ BaseSignerWalletAdapter,
        /* harmony export */
      });
      /* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(/*! ./adapter */ '../../core/base/dist/adapter.js');

      class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter {}
      class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {}
      //# sourceMappingURL=signer.js.map

      /***/
    },

  /***/ '../../core/base/dist/transaction.js':
    /*!*******************************************!*\
  !*** ../../core/base/dist/transaction.js ***!
  \*******************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Transaction: () => /* binding */ Transaction,
        /* harmony export */ Transition: () => /* binding */ Transition,
        /* harmony export */
      });
      class Transition {
        program;
        functionName;
        inputs;
        constructor(program, functionName, inputs) {
          this.program = program;
          this.functionName = functionName;
          this.inputs = inputs;
        }
      }
      class Transaction {
        address;
        chainId;
        transitions;
        fee;
        feePrivate;
        constructor(address, chainId, transitions, fee, feePrivate = true) {
          this.address = address;
          this.chainId = chainId;
          this.transitions = transitions;
          this.fee = fee;
          this.feePrivate = feePrivate;
        }
        static createTransaction(
          address,
          chainId,
          program,
          functionName,
          inputs,
          fee,
          feePrivate = true
        ) {
          const transition = new Transition(program, functionName, inputs);
          return new Transaction(
            address,
            chainId,
            [transition],
            fee,
            feePrivate
          );
        }
      }
      //# sourceMappingURL=transaction.js.map

      /***/
    },

  /***/ '../../core/base/dist/types.js':
    /*!*************************************!*\
  !*** ../../core/base/dist/types.js ***!
  \*************************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ DecryptPermission: () =>
          /* binding */ DecryptPermission,
        /* harmony export */ WalletAdapterNetwork: () =>
          /* binding */ WalletAdapterNetwork,
        /* harmony export */
      });
      var WalletAdapterNetwork;
      (function (WalletAdapterNetwork) {
        WalletAdapterNetwork['Testnet'] = 'testnet';
        WalletAdapterNetwork['Localnet'] = 'localnet';
      })(WalletAdapterNetwork || (WalletAdapterNetwork = {}));
      var DecryptPermission;
      (function (DecryptPermission) {
        DecryptPermission['NoDecrypt'] = 'NO_DECRYPT';
        DecryptPermission['UponRequest'] = 'DECRYPT_UPON_REQUEST';
        DecryptPermission['AutoDecrypt'] = 'AUTO_DECRYPT';
        DecryptPermission['OnChainHistory'] = 'ON_CHAIN_HISTORY';
      })(DecryptPermission || (DecryptPermission = {}));
      //# sourceMappingURL=types.js.map

      /***/
    },

  /***/ './adapter.ts':
    /*!********************!*\
  !*** ./adapter.ts ***!
  \********************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ TridentWalletAdapter: () =>
          /* binding */ TridentWalletAdapter,
        /* harmony export */ TridentWalletName: () =>
          /* binding */ TridentWalletName,
        /* harmony export */
      });
      /* harmony import */ var _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @demox-labs/miden-wallet-adapter-base */ '../../core/base/dist/index.js'
        );

      const TridentWalletName = 'Trident Wallet';
      class TridentWalletAdapter extends _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseMessageSignerWalletAdapter {
        name = TridentWalletName;
        url = 'https://leo.app/download';
        icon =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJERjI1N0M3NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJERjI1N0M4NUFERjExRUQ4OTkyRDkwNjQwODFGMjUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkRGMjU3QzU1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkRGMjU3QzY1QURGMTFFRDg5OTJEOTA2NDA4MUYyNTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZyM59AAACz0lEQVR42uzdT2vTYADH8d+Tpo3oYeph4g4iE6boZV68idKDiHj1spt7BYL4DgTfgKDgTdxZr4JXD4LCRMGLghtUGPgHpbWmaRuTsWOTOpfkyZ5+v+xWlrT5dE+ewJPFrLRjkb08DgEAABAAABAAAFD1+TmvxbFGQ5VxmdBoyMumT3Y6dujixPdlzO4BkqPvNzV/PO+X/7vuL/W6k7ec7PfovILAHYAf3zQIMw9jJsBwqGMLuvcoBSy8tYd6tqaDhya8FA20ekvLF9wBuHtb798oOLD7IShBawV5Y8VehqCcms30j8+d06y3h5PweFzKe4pjCzu1Vf6HZRbENBQAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAAgAAmgGArGWUTubX7Q01fD1/qvVXU1b0FVs00KkzungFgO11uy9faDSqdKf9ntrXAbA3BBljbdzjJMxJGAACAAACYDar4zQ0uSwq4zYx46nVAmBaw0g3VrV4uvgtb3X05MHOrB+AzJLv/tllnTtf/Ja/bO4AcA6Y0iAsZbPhH07CBAAABAAABAAABAAABAAAABAAABAAABAAABAAABAAABAAABAAAFippMdnNFt1BKjd2lBj0kWcc4cLfnqTkTobAPzb9/Tx/RJ1AZheebdoA7BfDxOzIAAIAAAIAOeyMwuKIvV/y6t2tmO8Ov4rKDsAi0u6dLXSw5FY97r68BaA7S5fS38qrrOhOzdrd50xQ+eAku5+BYBZEAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAEAAAGwrwBculuonp/Fy3/HjYZD37Xcz2I8O/BmpT35nsQ4VhDo5JI7fwRhX58/Tn5pPNbcES2cKGW/m5/ShdleBrCf4xaGevfaoSEo+zFWydH5+V1ft0rZb7OVefSVvzzd4kNerQxQgY3xllkQ01AACAAACAAAyEJ/BRgAJph5IP1XFpwAAAAASUVORK5CYII=';
        supportedTransactionVersions = null;
        _connecting;
        _wallet;
        _publicKey;
        _decryptPermission;
        _readyState =
          typeof window === 'undefined' || typeof document === 'undefined'
            ? _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__
                .WalletReadyState.Unsupported
            : _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__
                .WalletReadyState.NotDetected;
        constructor({ appName = 'sample' } = {}) {
          super();
          this._connecting = false;
          this._wallet = null;
          this._publicKey = null;
          this._decryptPermission =
            _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.DecryptPermission.NoDecrypt;
          if (
            this._readyState !==
            _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__
              .WalletReadyState.Unsupported
          ) {
            (0,
            _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.scopePollingDetectionStrategy)(
              () => {
                if (window?.tridentWallet || window?.trident) {
                  this._readyState =
                    _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletReadyState.Installed;
                  this.emit('readyStateChange', this._readyState);
                  return true;
                }
                return false;
              }
            );
          }
        }
        get publicKey() {
          return this._publicKey;
        }
        get decryptPermission() {
          return this._decryptPermission;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        set readyState(readyState) {
          this._readyState = readyState;
        }
        async requestTransaction(transaction) {
          try {
            const wallet = this._wallet;
            if (!wallet || !this.publicKey)
              throw new _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();
            try {
              const result = await wallet.requestTransaction(transaction);
              return result.transactionId;
            } catch (error) {
              throw new _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletTransactionError(
                error?.message,
                error
              );
            }
          } catch (error) {
            this.emit('error', error);
            throw error;
          }
        }
        async connect(decryptPermission, network, programs) {
          try {
            if (this.connected || this.connecting) return;
            if (
              this._readyState !==
              _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__
                .WalletReadyState.Installed
            )
              throw new _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotReadyError();
            this._connecting = true;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const wallet = window.tridentWallet || window.trident;
            try {
              await wallet.connect(decryptPermission, network, programs);
              if (!wallet?.publicKey) {
                throw new _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError();
              }
              this._publicKey = wallet.publicKey;
            } catch (error) {
              throw new _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError(
                error?.message,
                error
              );
            }
            this._wallet = wallet;
            this._decryptPermission = decryptPermission;
            this.emit('connect', this._publicKey);
          } catch (error) {
            this.emit('error', error);
            throw error;
          } finally {
            this._connecting = false;
          }
        }
        async disconnect() {
          const wallet = this._wallet;
          if (wallet) {
            // wallet.off('disconnect', this._disconnected);
            this._wallet = null;
            this._publicKey = null;
            try {
              await wallet.disconnect();
            } catch (error) {
              this.emit(
                'error',
                new _demox_labs_miden_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectionError(
                  error?.message,
                  error
                )
              );
            }
          }
          this.emit('disconnect');
        }
      }

      /***/
    },

  /******/
};
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId];
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports;
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ // no module.id needed
    /******/ // no module.loaded needed
    /******/ exports: {},
    /******/
  });
  /******/
  /******/ // Execute the module function
  /******/ __webpack_modules__[moduleId](
    module,
    module.exports,
    __webpack_require__
  );
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports;
  /******/
}
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
  /******/ // define getter functions for harmony exports
  /******/ __webpack_require__.d = (exports, definition) => {
    /******/ for (var key in definition) {
      /******/ if (
        __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key)
      ) {
        /******/ Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
        /******/
      }
      /******/
    }
    /******/
  };
  /******/
})();
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
  /******/ __webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
  /******/
})();
/******/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = (exports) => {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
})();
/******/
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
  /*!******************!*\
  !*** ./index.ts ***!
  \******************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ TridentWalletAdapter: () =>
      /* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.TridentWalletAdapter,
    /* harmony export */ TridentWalletName: () =>
      /* reexport safe */ _adapter__WEBPACK_IMPORTED_MODULE_0__.TridentWalletName,
    /* harmony export */
  });
  /* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(/*! ./adapter */ './adapter.ts');
})();

var __webpack_exports__TridentWalletAdapter =
  __webpack_exports__.TridentWalletAdapter;
var __webpack_exports__TridentWalletName =
  __webpack_exports__.TridentWalletName;
export {
  __webpack_exports__TridentWalletAdapter as TridentWalletAdapter,
  __webpack_exports__TridentWalletName as TridentWalletName,
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFBd0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUUsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Q0FDRjs7Ozs7OztTQy9LRDtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQiIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZW1veC1sYWJzL21pZGVuLXdhbGxldC1hZGFwdGVyLXRyaWRlbnQvLi4vLi4vY29yZS9iYXNlL2Rpc3QvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9taWRlbi13YWxsZXQtYWRhcHRlci10cmlkZW50Ly4uLy4uL2NvcmUvYmFzZS9kaXN0L2RlcGxveW1lbnQuanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvbWlkZW4td2FsbGV0LWFkYXB0ZXItdHJpZGVudC8uLi8uLi9jb3JlL2Jhc2UvZGlzdC9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvbWlkZW4td2FsbGV0LWFkYXB0ZXItdHJpZGVudC8uLi8uLi9jb3JlL2Jhc2UvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9taWRlbi13YWxsZXQtYWRhcHRlci10cmlkZW50Ly4uLy4uL2NvcmUvYmFzZS9kaXN0L3NpZ25lci5qcyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9taWRlbi13YWxsZXQtYWRhcHRlci10cmlkZW50Ly4uLy4uL2NvcmUvYmFzZS9kaXN0L3RyYW5zYWN0aW9uLmpzIiwid2VicGFjazovL0BkZW1veC1sYWJzL21pZGVuLXdhbGxldC1hZGFwdGVyLXRyaWRlbnQvLi4vLi4vY29yZS9iYXNlL2Rpc3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvbWlkZW4td2FsbGV0LWFkYXB0ZXItdHJpZGVudC8uL2FkYXB0ZXIudHMiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvbWlkZW4td2FsbGV0LWFkYXB0ZXItdHJpZGVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9taWRlbi13YWxsZXQtYWRhcHRlci10cmlkZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AZGVtb3gtbGFicy9taWRlbi13YWxsZXQtYWRhcHRlci10cmlkZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGRlbW94LWxhYnMvbWlkZW4td2FsbGV0LWFkYXB0ZXItdHJpZGVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BkZW1veC1sYWJzL21pZGVuLXdhbGxldC1hZGFwdGVyLXRyaWRlbnQvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuLyoqXG4gKiBBIHdhbGxldCdzIHJlYWRpbmVzcyBkZXNjcmliZXMgYSBzZXJpZXMgb2Ygc3RhdGVzIHRoYXQgdGhlIHdhbGxldCBjYW4gYmUgaW4sXG4gKiBkZXBlbmRpbmcgb24gd2hhdCBraW5kIG9mIHdhbGxldCBpdCBpcy4gQW4gaW5zdGFsbGFibGUgd2FsbGV0IChlZy4gYSBicm93c2VyXG4gKiBleHRlbnNpb24gbGlrZSBQaGFudG9tKSBtaWdodCBiZSBgSW5zdGFsbGVkYCBpZiB3ZSd2ZSBmb3VuZCB0aGUgUGhhbnRvbSBBUElcbiAqIGluIHRoZSBnbG9iYWwgc2NvcGUsIG9yIGBOb3REZXRlY3RlZGAgb3RoZXJ3aXNlLiBBIGxvYWRhYmxlLCB6ZXJvLWluc3RhbGxcbiAqIHJ1bnRpbWUgKGVnLiBUb3J1cyBXYWxsZXQpIG1pZ2h0IHNpbXBseSBzaWduYWwgdGhhdCBpdCdzIGBMb2FkYWJsZWAuIFVzZSB0aGlzXG4gKiBtZXRhZGF0YSB0byBwZXJzb25hbGl6ZSB0aGUgd2FsbGV0IGxpc3QgZm9yIGVhY2ggdXNlciAoZWcuIHRvIHNob3cgdGhlaXJcbiAqIGluc3RhbGxlZCB3YWxsZXRzIGZpcnN0KS5cbiAqL1xuZXhwb3J0IHZhciBXYWxsZXRSZWFkeVN0YXRlO1xuKGZ1bmN0aW9uIChXYWxsZXRSZWFkeVN0YXRlKSB7XG4gICAgLyoqXG4gICAgICogVXNlci1pbnN0YWxsYWJsZSB3YWxsZXRzIGNhbiB0eXBpY2FsbHkgYmUgZGV0ZWN0ZWQgYnkgc2Nhbm5pbmcgZm9yIGFuIEFQSVxuICAgICAqIHRoYXQgdGhleSd2ZSBpbmplY3RlZCBpbnRvIHRoZSBnbG9iYWwgY29udGV4dC4gSWYgc3VjaCBhbiBBUEkgaXMgcHJlc2VudCxcbiAgICAgKiB3ZSBjb25zaWRlciB0aGUgd2FsbGV0IHRvIGhhdmUgYmVlbiBpbnN0YWxsZWQuXG4gICAgICovXG4gICAgV2FsbGV0UmVhZHlTdGF0ZVtcIkluc3RhbGxlZFwiXSA9IFwiSW5zdGFsbGVkXCI7XG4gICAgV2FsbGV0UmVhZHlTdGF0ZVtcIk5vdERldGVjdGVkXCJdID0gXCJOb3REZXRlY3RlZFwiO1xuICAgIC8qKlxuICAgICAqIExvYWRhYmxlIHdhbGxldHMgYXJlIGFsd2F5cyBhdmFpbGFibGUgdG8geW91LiBTaW5jZSB5b3UgY2FuIGxvYWQgdGhlbSBhdFxuICAgICAqIGFueSB0aW1lLCBpdCdzIG1lYW5pbmdsZXNzIHRvIHNheSB0aGF0IHRoZXkgaGF2ZSBiZWVuIGRldGVjdGVkLlxuICAgICAqL1xuICAgIFdhbGxldFJlYWR5U3RhdGVbXCJMb2FkYWJsZVwiXSA9IFwiTG9hZGFibGVcIjtcbiAgICAvKipcbiAgICAgKiBJZiBhIHdhbGxldCBpcyBub3Qgc3VwcG9ydGVkIG9uIGEgZ2l2ZW4gcGxhdGZvcm0gKGVnLiBzZXJ2ZXItcmVuZGVyaW5nLCBvclxuICAgICAqIG1vYmlsZSkgdGhlbiBpdCB3aWxsIHN0YXkgaW4gdGhlIGBVbnN1cHBvcnRlZGAgc3RhdGUuXG4gICAgICovXG4gICAgV2FsbGV0UmVhZHlTdGF0ZVtcIlVuc3VwcG9ydGVkXCJdID0gXCJVbnN1cHBvcnRlZFwiO1xufSkoV2FsbGV0UmVhZHlTdGF0ZSB8fCAoV2FsbGV0UmVhZHlTdGF0ZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgQmFzZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucHVibGljS2V5O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzY29wZVBvbGxpbmdEZXRlY3Rpb25TdHJhdGVneShkZXRlY3QpIHtcbiAgICAvLyBFYXJseSByZXR1cm4gd2hlbiBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRpc3Bvc2VycyA9IFtdO1xuICAgIGZ1bmN0aW9uIGRldGVjdEFuZERpc3Bvc2UoKSB7XG4gICAgICAgIGNvbnN0IGRldGVjdGVkID0gZGV0ZWN0KCk7XG4gICAgICAgIGlmIChkZXRlY3RlZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkaXNwb3NlIG9mIGRpc3Bvc2Vycykge1xuICAgICAgICAgICAgICAgIGRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBTdHJhdGVneSAjMTogVHJ5IGRldGVjdGluZyBldmVyeSBzZWNvbmQuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBcbiAgICAvLyBUT0RPOiAjMzM0IFJlcGxhY2Ugd2l0aCBpZGxlIGNhbGxiYWNrIHN0cmF0ZWd5LlxuICAgIHNldEludGVydmFsKGRldGVjdEFuZERpc3Bvc2UsIDEwMDApO1xuICAgIGRpc3Bvc2Vycy5wdXNoKCgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpKTtcbiAgICAvLyBTdHJhdGVneSAjMjogRGV0ZWN0IGFzIHNvb24gYXMgdGhlIERPTSBiZWNvbWVzICdyZWFkeScvJ2ludGVyYWN0aXZlJy5cbiAgICBpZiAoXG4gICAgLy8gSW1wbGllcyB0aGF0IGBET01Db250ZW50TG9hZGVkYCBoYXMgbm90IHlldCBmaXJlZC5cbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRldGVjdEFuZERpc3Bvc2UsIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkaXNwb3NlcnMucHVzaCgoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGV0ZWN0QW5kRGlzcG9zZSkpO1xuICAgIH1cbiAgICAvLyBTdHJhdGVneSAjMzogRGV0ZWN0IGFmdGVyIHRoZSBgd2luZG93YCBoYXMgZnVsbHkgbG9hZGVkLlxuICAgIGlmIChcbiAgICAvLyBJZiB0aGUgYGNvbXBsZXRlYCBzdGF0ZSBoYXMgYmVlbiByZWFjaGVkLCB3ZSdyZSB0b28gbGF0ZS5cbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZGV0ZWN0QW5kRGlzcG9zZSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBkaXNwb3NlcnMucHVzaCgoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGRldGVjdEFuZERpc3Bvc2UpKTtcbiAgICB9XG4gICAgLy8gU3RyYXRlZ3kgIzQ6IERldGVjdCBzeW5jaHJvbm91c2x5LCBub3cuXG4gICAgZGV0ZWN0QW5kRGlzcG9zZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgRGVwbG95bWVudCB7XG4gICAgYWRkcmVzcztcbiAgICBjaGFpbklkO1xuICAgIHByb2dyYW07XG4gICAgZmVlO1xuICAgIGZlZVByaXZhdGU7XG4gICAgY29uc3RydWN0b3IoYWRkcmVzcywgY2hhaW5JZCwgcHJvZ3JhbSwgZmVlLCBmZWVQcml2YXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB0aGlzLmNoYWluSWQgPSBjaGFpbklkO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB0aGlzLmZlZSA9IGZlZTtcbiAgICAgICAgdGhpcy5mZWVQcml2YXRlID0gZmVlUHJpdmF0ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXBsb3ltZW50LmpzLm1hcCIsImV4cG9ydCBjbGFzcyBXYWxsZXRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBlcnJvcjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdFJlYWR5RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXROb3RSZWFkeUVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRMb2FkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRMb2FkRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldENvbmZpZ0Vycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0Q29uZmlnRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldENvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldENvbm5lY3Rpb25FcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldE5vdFNlbGVjdGVkRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGVkRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldERpc2Nvbm5lY3Rpb25FcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0QWNjb3VudEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0QWNjb3VudEVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRQdWJsaWNLZXlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFB1YmxpY0tleUVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRLZXlwYWlyRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRLZXlwYWlyRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdENvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldFNlbmRUcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0U2VuZFRyYW5zYWN0aW9uRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldFNpZ25NZXNzYWdlRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRTaWduTWVzc2FnZUVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRTaWduVHJhbnNhY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFNpZ25UcmFuc2FjdGlvbkVycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRUaW1lb3V0RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRUaW1lb3V0RXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldFdpbmRvd0Jsb2NrZWRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgbmFtZSA9ICdXYWxsZXRXaW5kb3dDbG9zZWRFcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGVjcnlwdGlvbk5vdEFsbG93ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldERlY3J5cHRpb25Ob3RBbGxvd2VkRXJyb3InO1xufVxuZXhwb3J0IGNsYXNzIFdhbGxldERlY3J5cHRpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBuYW1lID0gJ1dhbGxldERlY3J5cHRpb25FcnJvcic7XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0UmVjb3Jkc0Vycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0UmVjb3Jkc0Vycm9yJztcbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRUcmFuc2FjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIG5hbWUgPSAnV2FsbGV0VHJhbnNhY3Rpb25FcnJvcic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vc2lnbmVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2FjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2RlcGxveW1lbnQnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgQmFzZVdhbGxldEFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXInO1xuZXhwb3J0IGNsYXNzIEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZVdhbGxldEFkYXB0ZXIge1xufVxuZXhwb3J0IGNsYXNzIEJhc2VNZXNzYWdlU2lnbmVyV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VTaWduZXJXYWxsZXRBZGFwdGVyIHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZ25lci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgVHJhbnNpdGlvbiB7XG4gICAgcHJvZ3JhbTtcbiAgICBmdW5jdGlvbk5hbWU7XG4gICAgaW5wdXRzO1xuICAgIGNvbnN0cnVjdG9yKHByb2dyYW0sIGZ1bmN0aW9uTmFtZSwgaW5wdXRzKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMuZnVuY3Rpb25OYW1lID0gZnVuY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb24ge1xuICAgIGFkZHJlc3M7XG4gICAgY2hhaW5JZDtcbiAgICB0cmFuc2l0aW9ucztcbiAgICBmZWU7XG4gICAgZmVlUHJpdmF0ZTtcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzLCBjaGFpbklkLCB0cmFuc2l0aW9ucywgZmVlLCBmZWVQcml2YXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB0aGlzLmNoYWluSWQgPSBjaGFpbklkO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25zID0gdHJhbnNpdGlvbnM7XG4gICAgICAgIHRoaXMuZmVlID0gZmVlO1xuICAgICAgICB0aGlzLmZlZVByaXZhdGUgPSBmZWVQcml2YXRlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlVHJhbnNhY3Rpb24oYWRkcmVzcywgY2hhaW5JZCwgcHJvZ3JhbSwgZnVuY3Rpb25OYW1lLCBpbnB1dHMsIGZlZSwgZmVlUHJpdmF0ZSA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHByb2dyYW0sIGZ1bmN0aW9uTmFtZSwgaW5wdXRzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbihhZGRyZXNzLCBjaGFpbklkLCBbdHJhbnNpdGlvbl0sIGZlZSwgZmVlUHJpdmF0ZSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNhY3Rpb24uanMubWFwIiwiZXhwb3J0IHZhciBXYWxsZXRBZGFwdGVyTmV0d29yaztcbihmdW5jdGlvbiAoV2FsbGV0QWRhcHRlck5ldHdvcmspIHtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIlRlc3RuZXRcIl0gPSBcInRlc3RuZXRcIjtcbiAgICBXYWxsZXRBZGFwdGVyTmV0d29ya1tcIkxvY2FsbmV0XCJdID0gXCJsb2NhbG5ldFwiO1xufSkoV2FsbGV0QWRhcHRlck5ldHdvcmsgfHwgKFdhbGxldEFkYXB0ZXJOZXR3b3JrID0ge30pKTtcbmV4cG9ydCB2YXIgRGVjcnlwdFBlcm1pc3Npb247XG4oZnVuY3Rpb24gKERlY3J5cHRQZXJtaXNzaW9uKSB7XG4gICAgRGVjcnlwdFBlcm1pc3Npb25bXCJOb0RlY3J5cHRcIl0gPSBcIk5PX0RFQ1JZUFRcIjtcbiAgICBEZWNyeXB0UGVybWlzc2lvbltcIlVwb25SZXF1ZXN0XCJdID0gXCJERUNSWVBUX1VQT05fUkVRVUVTVFwiO1xuICAgIERlY3J5cHRQZXJtaXNzaW9uW1wiQXV0b0RlY3J5cHRcIl0gPSBcIkFVVE9fREVDUllQVFwiO1xuICAgIERlY3J5cHRQZXJtaXNzaW9uW1wiT25DaGFpbkhpc3RvcnlcIl0gPSBcIk9OX0NIQUlOX0hJU1RPUllcIjtcbn0pKERlY3J5cHRQZXJtaXNzaW9uIHx8IChEZWNyeXB0UGVybWlzc2lvbiA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJpbXBvcnQge1xuICBCYXNlTWVzc2FnZVNpZ25lcldhbGxldEFkYXB0ZXIsXG4gIEV2ZW50RW1pdHRlcixcbiAgc2NvcGVQb2xsaW5nRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFdhbGxldENvbm5lY3Rpb25FcnJvcixcbiAgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yLFxuICBXYWxsZXROYW1lLFxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcbiAgV2FsbGV0Tm90UmVhZHlFcnJvcixcbiAgV2FsbGV0UmVhZHlTdGF0ZSxcbiAgRGVjcnlwdFBlcm1pc3Npb24sXG4gIFdhbGxldEFkYXB0ZXJOZXR3b3JrLFxuICBBbGVvVHJhbnNhY3Rpb24sXG4gIFdhbGxldFRyYW5zYWN0aW9uRXJyb3IsXG59IGZyb20gJ0BkZW1veC1sYWJzL21pZGVuLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyaWRlbnRXYWxsZXRFdmVudHMge1xuICBjb25uZWN0KC4uLmFyZ3M6IHVua25vd25bXSk6IHVua25vd247XG4gIGRpc2Nvbm5lY3QoLi4uYXJnczogdW5rbm93bltdKTogdW5rbm93bjtcbiAgYWNjb3VudENoYW5nZSguLi5hcmdzOiB1bmtub3duW10pOiB1bmtub3duO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyaWRlbnRXYWxsZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXI8VHJpZGVudFdhbGxldEV2ZW50cz4ge1xuICBwdWJsaWNLZXk/OiBzdHJpbmc7XG4gIHJlcXVlc3RUcmFuc2FjdGlvbihcbiAgICB0cmFuc2FjdGlvbjogQWxlb1RyYW5zYWN0aW9uXG4gICk6IFByb21pc2U8eyB0cmFuc2FjdGlvbklkPzogc3RyaW5nIH0+O1xuICBjb25uZWN0KFxuICAgIGRlY3J5cHRQZXJtaXNzaW9uOiBEZWNyeXB0UGVybWlzc2lvbixcbiAgICBuZXR3b3JrOiBXYWxsZXRBZGFwdGVyTmV0d29yayxcbiAgICBwcm9ncmFtcz86IHN0cmluZ1tdXG4gICk6IFByb21pc2U8dm9pZD47XG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmlkZW50V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgdHJpZGVudFdhbGxldD86IFRyaWRlbnRXYWxsZXQ7XG4gIHRyaWRlbnQ/OiBUcmlkZW50V2FsbGV0O1xufVxuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogVHJpZGVudFdpbmRvdztcblxuZXhwb3J0IGludGVyZmFjZSBUcmlkZW50V2FsbGV0QWRhcHRlckNvbmZpZyB7XG4gIGFwcE5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBUcmlkZW50V2FsbGV0TmFtZSA9XG4gICdUcmlkZW50IFdhbGxldCcgYXMgV2FsbGV0TmFtZTwnVHJpZGVudCBXYWxsZXQnPjtcblxuZXhwb3J0IGNsYXNzIFRyaWRlbnRXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZU1lc3NhZ2VTaWduZXJXYWxsZXRBZGFwdGVyIHtcbiAgbmFtZSA9IFRyaWRlbnRXYWxsZXROYW1lO1xuICB1cmwgPSAnaHR0cHM6Ly9sZW8uYXBwL2Rvd25sb2FkJztcbiAgaWNvbiA9XG4gICAgJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUNBSUFBQUJNWFBhY0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeVpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEa3VNQzFqTURBd0lEYzVMakUzTVdNeU4yWmhZaXdnTWpBeU1pOHdPQzh4TmkweU1qb3pOVG8wTVNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SURJMExqQWdLRmRwYm1SdmQzTXBJaUI0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPakpFUmpJMU4wTTNOVUZFUmpFeFJVUTRPVGt5UkRrd05qUXdPREZHTWpVd0lpQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qSkVSakkxTjBNNE5VRkVSakV4UlVRNE9Ua3lSRGt3TmpRd09ERkdNalV3SWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1rUkdNalUzUXpVMVFVUkdNVEZGUkRnNU9USkVPVEEyTkRBNE1VWXlOVEFpSUhOMFVtVm1PbVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TWtSR01qVTNRelkxUVVSR01URkZSRGc1T1RKRU9UQTJOREE0TVVZeU5UQWlMejRnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrSUR3dmNtUm1PbEpFUmo0Z1BDOTRPbmh0Y0cxbGRHRStJRHcvZUhCaFkydGxkQ0JsYm1ROUluSWlQejdaeU01OUFBQUN6MGxFUVZSNDJ1emRUMnZUWUFESDhkK1RwbzNvWWVwaDRnNGlFNmJvWlY2OGlkS0RpSGoxc3B0N0JZTDREZ1RmZ0tEZ1RkeFpyNEpYRDRMQ1JNR0xnaHRVR1BnSHBiV21hUnVUc1dPVE9wZmt5WjUrdit4V2xyVDVkRStld0pQRnJMUmprYjA4RGdFQUFCQUFBQkFBQUZEMStUbXZ4YkZHUTVWeG1kQm95TXVtVDNZNmR1aml4UGRsek80QmtxUHZOelYvUE8rWC83dnVML1c2azdlYzdQZm92SUxBSFlBZjN6UUlNdzlqSnNCd3FHTUx1dmNvQlN5OHRZZDZ0cWFEaHlhOEZBMjBla3ZMRjl3QnVIdGI3OThvT0xEN0lTaEJhd1Y1WThWZWhxQ2NtczMwajgrZDA2eTNoNVB3ZUZ6S2U0cGpDenUxVmY2SFpSYkVOQlFBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFBZ0FBQWdBQUFnQUFtZ0dBckdXVVR1Ylg3UTAxZkQxL3F2VlhVMWIwRlZzMDBLa3p1bmdGZ08xMXV5OWZhRFNxZEtmOW50clhBYkEzQkJsamJkempKTXhKR0FBQ0FBQUNZRGFyNHpRMHVTd3E0ell4NDZuVkFtQmF3MGczVnJWNHV2Z3RiM1gwNU1IT3JCK0F6Skx2L3RsbG5UdGYvSmEvYk80QWNBNlkwaUFzWmJQaEgwN0NCQUFBQkFBQUJBQUFCQUFBQkFBQUFCQUFBQkFBQUJBQUFCQUFBQkFBQUJBQUFCQUFBRmlwcE1kbk5GdDFCS2pkMmxCajBrV2NjNGNMZm5xVGtUb2JBUHpiOS9UeC9SSjFBWmhlZWJkb0E3QmZEeE96SUFBSUFBQUlBT2V5TXd1S0l2Vi95NnQydG1POE92NHJLRHNBaTB1NmRMWFN3NUZZOTdyNjhCYUE3UzVmUzM4cXJyT2hPemRyZDUweFErZUFrdTUrQllCWkVBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFFQUFBRUFBQUVBQUFHd3J3QmN1bHVvbnAvRnkzL0hqWVpEMzdYY3oySThPL0JtcFQzNW5zUTRWaERvNUpJN2Z3UmhYNTgvVG41cFBOYmNFUzJjS0dXL201L1NoZGxlQnJDZjR4YUdldmZhb1NFbyt6Rld5ZEg1K1YxZnQwclpiN09WZWZTVnZ6emQ0a05lclF4UWdZM3hsbGtRMDFBQUNBQUFDQUFBeUVKL0JSZ0FKcGg1SVAxWEZwd0FBQUFBU1VWT1JLNUNZSUk9JztcbiAgcmVhZG9ubHkgc3VwcG9ydGVkVHJhbnNhY3Rpb25WZXJzaW9ucyA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfY29ubmVjdGluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfd2FsbGV0OiBUcmlkZW50V2FsbGV0IHwgbnVsbDtcbiAgcHJpdmF0ZSBfcHVibGljS2V5OiBzdHJpbmcgfCBudWxsO1xuICBwcml2YXRlIF9kZWNyeXB0UGVybWlzc2lvbjogc3RyaW5nO1xuICBwcml2YXRlIF9yZWFkeVN0YXRlOiBXYWxsZXRSZWFkeVN0YXRlID1cbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWRcbiAgICAgIDogV2FsbGV0UmVhZHlTdGF0ZS5Ob3REZXRlY3RlZDtcblxuICBjb25zdHJ1Y3Rvcih7IGFwcE5hbWUgPSAnc2FtcGxlJyB9OiBUcmlkZW50V2FsbGV0QWRhcHRlckNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fd2FsbGV0ID0gbnVsbDtcbiAgICB0aGlzLl9wdWJsaWNLZXkgPSBudWxsO1xuICAgIHRoaXMuX2RlY3J5cHRQZXJtaXNzaW9uID0gRGVjcnlwdFBlcm1pc3Npb24uTm9EZWNyeXB0O1xuXG4gICAgY29uc29sZS5sb2coJ1RyaWRlbnRXYWxsZXRBZGFwdGVyJywgYXBwTmFtZSk7XG4gICAgaWYgKHRoaXMuX3JlYWR5U3RhdGUgIT09IFdhbGxldFJlYWR5U3RhdGUuVW5zdXBwb3J0ZWQpIHtcbiAgICAgIHNjb3BlUG9sbGluZ0RldGVjdGlvblN0cmF0ZWd5KCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdz8udHJpZGVudFdhbGxldCB8fCB3aW5kb3c/LnRyaWRlbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZWFkeVN0YXRlID0gV2FsbGV0UmVhZHlTdGF0ZS5JbnN0YWxsZWQ7XG4gICAgICAgICAgdGhpcy5lbWl0KCdyZWFkeVN0YXRlQ2hhbmdlJywgdGhpcy5fcmVhZHlTdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHB1YmxpY0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHVibGljS2V5O1xuICB9XG5cbiAgZ2V0IGRlY3J5cHRQZXJtaXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWNyeXB0UGVybWlzc2lvbjtcbiAgfVxuXG4gIGdldCBjb25uZWN0aW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICB9XG5cbiAgZ2V0IHJlYWR5U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWR5U3RhdGU7XG4gIH1cblxuICBzZXQgcmVhZHlTdGF0ZShyZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5fcmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGU7XG4gIH1cblxuICBhc3luYyByZXF1ZXN0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IEFsZW9UcmFuc2FjdGlvbik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdhbGxldCA9IHRoaXMuX3dhbGxldDtcbiAgICAgIGlmICghd2FsbGV0IHx8ICF0aGlzLnB1YmxpY0tleSkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB3YWxsZXQucmVxdWVzdFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50cmFuc2FjdGlvbklkO1xuICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICB0aHJvdyBuZXcgV2FsbGV0VHJhbnNhY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjb25uZWN0KFxuICAgIGRlY3J5cHRQZXJtaXNzaW9uOiBEZWNyeXB0UGVybWlzc2lvbixcbiAgICBuZXR3b3JrOiBXYWxsZXRBZGFwdGVyTmV0d29yayxcbiAgICBwcm9ncmFtcz86IHN0cmluZ1tdXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5jb25uZWN0ZWQgfHwgdGhpcy5jb25uZWN0aW5nKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5fcmVhZHlTdGF0ZSAhPT0gV2FsbGV0UmVhZHlTdGF0ZS5JbnN0YWxsZWQpXG4gICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RSZWFkeUVycm9yKCk7XG5cbiAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSB0cnVlO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgY29uc3Qgd2FsbGV0ID0gd2luZG93LnRyaWRlbnRXYWxsZXQhIHx8IHdpbmRvdy50cmlkZW50ITtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgd2FsbGV0LmNvbm5lY3QoZGVjcnlwdFBlcm1pc3Npb24sIG5ldHdvcmssIHByb2dyYW1zKTtcbiAgICAgICAgaWYgKCF3YWxsZXQ/LnB1YmxpY0tleSkge1xuICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wdWJsaWNLZXkgPSB3YWxsZXQucHVibGljS2V5ITtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcihlcnJvcj8ubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl93YWxsZXQgPSB3YWxsZXQ7XG4gICAgICB0aGlzLl9kZWNyeXB0UGVybWlzc2lvbiA9IGRlY3J5cHRQZXJtaXNzaW9uO1xuXG4gICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QnLCB0aGlzLl9wdWJsaWNLZXkpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgd2FsbGV0ID0gdGhpcy5fd2FsbGV0O1xuICAgIGlmICh3YWxsZXQpIHtcbiAgICAgIC8vIHdhbGxldC5vZmYoJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuXG4gICAgICB0aGlzLl93YWxsZXQgPSBudWxsO1xuICAgICAgdGhpcy5fcHVibGljS2V5ID0gbnVsbDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgd2FsbGV0LmRpc2Nvbm5lY3QoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3I/Lm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
