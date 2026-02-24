
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserDevice
 * 
 */
export type UserDevice = $Result.DefaultSelection<Prisma.$UserDevicePayload>
/**
 * Model Detection_sessions
 * 
 */
export type Detection_sessions = $Result.DefaultSelection<Prisma.$Detection_sessionsPayload>
/**
 * Model Detection_records
 * 
 */
export type Detection_records = $Result.DefaultSelection<Prisma.$Detection_recordsPayload>
/**
 * Model Detection_monthly
 * 
 */
export type Detection_monthly = $Result.DefaultSelection<Prisma.$Detection_monthlyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDevice`: Exposes CRUD operations for the **UserDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDevices
    * const userDevices = await prisma.userDevice.findMany()
    * ```
    */
  get userDevice(): Prisma.UserDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detection_sessions`: Exposes CRUD operations for the **Detection_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detection_sessions
    * const detection_sessions = await prisma.detection_sessions.findMany()
    * ```
    */
  get detection_sessions(): Prisma.Detection_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detection_records`: Exposes CRUD operations for the **Detection_records** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detection_records
    * const detection_records = await prisma.detection_records.findMany()
    * ```
    */
  get detection_records(): Prisma.Detection_recordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detection_monthly`: Exposes CRUD operations for the **Detection_monthly** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detection_monthlies
    * const detection_monthlies = await prisma.detection_monthly.findMany()
    * ```
    */
  get detection_monthly(): Prisma.Detection_monthlyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserDevice: 'UserDevice',
    Detection_sessions: 'Detection_sessions',
    Detection_records: 'Detection_records',
    Detection_monthly: 'Detection_monthly'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userDevice" | "detection_sessions" | "detection_records" | "detection_monthly"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserDevice: {
        payload: Prisma.$UserDevicePayload<ExtArgs>
        fields: Prisma.UserDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findFirst: {
            args: Prisma.UserDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          findMany: {
            args: Prisma.UserDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          create: {
            args: Prisma.UserDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          createMany: {
            args: Prisma.UserDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          delete: {
            args: Prisma.UserDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          update: {
            args: Prisma.UserDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          deleteMany: {
            args: Prisma.UserDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>[]
          }
          upsert: {
            args: Prisma.UserDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDevicePayload>
          }
          aggregate: {
            args: Prisma.UserDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDevice>
          }
          groupBy: {
            args: Prisma.UserDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<UserDeviceCountAggregateOutputType> | number
          }
        }
      }
      Detection_sessions: {
        payload: Prisma.$Detection_sessionsPayload<ExtArgs>
        fields: Prisma.Detection_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Detection_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Detection_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>
          }
          findFirst: {
            args: Prisma.Detection_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Detection_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>
          }
          findMany: {
            args: Prisma.Detection_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>[]
          }
          create: {
            args: Prisma.Detection_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>
          }
          createMany: {
            args: Prisma.Detection_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Detection_sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>[]
          }
          delete: {
            args: Prisma.Detection_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>
          }
          update: {
            args: Prisma.Detection_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.Detection_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Detection_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Detection_sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>[]
          }
          upsert: {
            args: Prisma.Detection_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_sessionsPayload>
          }
          aggregate: {
            args: Prisma.Detection_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetection_sessions>
          }
          groupBy: {
            args: Prisma.Detection_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detection_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Detection_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<Detection_sessionsCountAggregateOutputType> | number
          }
        }
      }
      Detection_records: {
        payload: Prisma.$Detection_recordsPayload<ExtArgs>
        fields: Prisma.Detection_recordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Detection_recordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Detection_recordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>
          }
          findFirst: {
            args: Prisma.Detection_recordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Detection_recordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>
          }
          findMany: {
            args: Prisma.Detection_recordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>[]
          }
          create: {
            args: Prisma.Detection_recordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>
          }
          createMany: {
            args: Prisma.Detection_recordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Detection_recordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>[]
          }
          delete: {
            args: Prisma.Detection_recordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>
          }
          update: {
            args: Prisma.Detection_recordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>
          }
          deleteMany: {
            args: Prisma.Detection_recordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Detection_recordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Detection_recordsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>[]
          }
          upsert: {
            args: Prisma.Detection_recordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_recordsPayload>
          }
          aggregate: {
            args: Prisma.Detection_recordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetection_records>
          }
          groupBy: {
            args: Prisma.Detection_recordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detection_recordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Detection_recordsCountArgs<ExtArgs>
            result: $Utils.Optional<Detection_recordsCountAggregateOutputType> | number
          }
        }
      }
      Detection_monthly: {
        payload: Prisma.$Detection_monthlyPayload<ExtArgs>
        fields: Prisma.Detection_monthlyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Detection_monthlyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Detection_monthlyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>
          }
          findFirst: {
            args: Prisma.Detection_monthlyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Detection_monthlyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>
          }
          findMany: {
            args: Prisma.Detection_monthlyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>[]
          }
          create: {
            args: Prisma.Detection_monthlyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>
          }
          createMany: {
            args: Prisma.Detection_monthlyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Detection_monthlyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>[]
          }
          delete: {
            args: Prisma.Detection_monthlyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>
          }
          update: {
            args: Prisma.Detection_monthlyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>
          }
          deleteMany: {
            args: Prisma.Detection_monthlyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Detection_monthlyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Detection_monthlyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>[]
          }
          upsert: {
            args: Prisma.Detection_monthlyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detection_monthlyPayload>
          }
          aggregate: {
            args: Prisma.Detection_monthlyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetection_monthly>
          }
          groupBy: {
            args: Prisma.Detection_monthlyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detection_monthlyGroupByOutputType>[]
          }
          count: {
            args: Prisma.Detection_monthlyCountArgs<ExtArgs>
            result: $Utils.Optional<Detection_monthlyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userDevice?: UserDeviceOmit
    detection_sessions?: Detection_sessionsOmit
    detection_records?: Detection_recordsOmit
    detection_monthly?: Detection_monthlyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    devices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
  }


  /**
   * Count Type Detection_sessionsCountOutputType
   */

  export type Detection_sessionsCountOutputType = {
    records: number
  }

  export type Detection_sessionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | Detection_sessionsCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * Detection_sessionsCountOutputType without action
   */
  export type Detection_sessionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessionsCountOutputType
     */
    select?: Detection_sessionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Detection_sessionsCountOutputType without action
   */
  export type Detection_sessionsCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detection_recordsWhereInput
  }


  /**
   * Count Type Detection_monthlyCountOutputType
   */

  export type Detection_monthlyCountOutputType = {
    sessions: number
  }

  export type Detection_monthlyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Detection_monthlyCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * Detection_monthlyCountOutputType without action
   */
  export type Detection_monthlyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthlyCountOutputType
     */
    select?: Detection_monthlyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Detection_monthlyCountOutputType without action
   */
  export type Detection_monthlyCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detection_sessionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    phone: string | null
    email: string | null
    address: string | null
    birth: Date | null
    isVerified: boolean | null
    verifyExpiredAt: Date | null
    verifyToken: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    imageProfile: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    phone: string | null
    email: string | null
    address: string | null
    birth: Date | null
    isVerified: boolean | null
    verifyExpiredAt: Date | null
    verifyToken: string | null
    createdAt: Date | null
    role: $Enums.Role | null
    imageProfile: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    phone: number
    email: number
    address: number
    birth: number
    isVerified: number
    verifyExpiredAt: number
    verifyToken: number
    createdAt: number
    role: number
    imageProfile: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    phone?: true
    email?: true
    address?: true
    birth?: true
    isVerified?: true
    verifyExpiredAt?: true
    verifyToken?: true
    createdAt?: true
    role?: true
    imageProfile?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    phone?: true
    email?: true
    address?: true
    birth?: true
    isVerified?: true
    verifyExpiredAt?: true
    verifyToken?: true
    createdAt?: true
    role?: true
    imageProfile?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    phone?: true
    email?: true
    address?: true
    birth?: true
    isVerified?: true
    verifyExpiredAt?: true
    verifyToken?: true
    createdAt?: true
    role?: true
    imageProfile?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    phone: string
    email: string
    address: string
    birth: Date | null
    isVerified: boolean
    verifyExpiredAt: Date | null
    verifyToken: string | null
    createdAt: Date
    role: $Enums.Role
    imageProfile: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    birth?: boolean
    isVerified?: boolean
    verifyExpiredAt?: boolean
    verifyToken?: boolean
    createdAt?: boolean
    role?: boolean
    imageProfile?: boolean
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    birth?: boolean
    isVerified?: boolean
    verifyExpiredAt?: boolean
    verifyToken?: boolean
    createdAt?: boolean
    role?: boolean
    imageProfile?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    birth?: boolean
    isVerified?: boolean
    verifyExpiredAt?: boolean
    verifyToken?: boolean
    createdAt?: boolean
    role?: boolean
    imageProfile?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    birth?: boolean
    isVerified?: boolean
    verifyExpiredAt?: boolean
    verifyToken?: boolean
    createdAt?: boolean
    role?: boolean
    imageProfile?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "phone" | "email" | "address" | "birth" | "isVerified" | "verifyExpiredAt" | "verifyToken" | "createdAt" | "role" | "imageProfile", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | User$devicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      devices: Prisma.$UserDevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      phone: string
      email: string
      address: string
      birth: Date | null
      isVerified: boolean
      verifyExpiredAt: Date | null
      verifyToken: string | null
      createdAt: Date
      role: $Enums.Role
      imageProfile: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly verifyExpiredAt: FieldRef<"User", 'DateTime'>
    readonly verifyToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly imageProfile: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    cursor?: UserDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserDevice
   */

  export type AggregateUserDevice = {
    _count: UserDeviceCountAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  export type UserDeviceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceCode: string | null
    createdAt: Date | null
  }

  export type UserDeviceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceCode: string | null
    createdAt: Date | null
  }

  export type UserDeviceCountAggregateOutputType = {
    id: number
    userId: number
    deviceCode: number
    createdAt: number
    _all: number
  }


  export type UserDeviceMinAggregateInputType = {
    id?: true
    userId?: true
    deviceCode?: true
    createdAt?: true
  }

  export type UserDeviceMaxAggregateInputType = {
    id?: true
    userId?: true
    deviceCode?: true
    createdAt?: true
  }

  export type UserDeviceCountAggregateInputType = {
    id?: true
    userId?: true
    deviceCode?: true
    createdAt?: true
    _all?: true
  }

  export type UserDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevice to aggregate.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDevices
    **/
    _count?: true | UserDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDeviceMaxAggregateInputType
  }

  export type GetUserDeviceAggregateType<T extends UserDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDevice[P]>
      : GetScalarType<T[P], AggregateUserDevice[P]>
  }




  export type UserDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDeviceWhereInput
    orderBy?: UserDeviceOrderByWithAggregationInput | UserDeviceOrderByWithAggregationInput[]
    by: UserDeviceScalarFieldEnum[] | UserDeviceScalarFieldEnum
    having?: UserDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDeviceCountAggregateInputType | true
    _min?: UserDeviceMinAggregateInputType
    _max?: UserDeviceMaxAggregateInputType
  }

  export type UserDeviceGroupByOutputType = {
    id: string
    userId: string
    deviceCode: string
    createdAt: Date
    _count: UserDeviceCountAggregateOutputType | null
    _min: UserDeviceMinAggregateOutputType | null
    _max: UserDeviceMaxAggregateOutputType | null
  }

  type GetUserDeviceGroupByPayload<T extends UserDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], UserDeviceGroupByOutputType[P]>
        }
      >
    >


  export type UserDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceCode?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceCode?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceCode?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDevice"]>

  export type UserDeviceSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceCode?: boolean
    createdAt?: boolean
  }

  export type UserDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deviceCode" | "createdAt", ExtArgs["result"]["userDevice"]>
  export type UserDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDevice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deviceCode: string
      createdAt: Date
    }, ExtArgs["result"]["userDevice"]>
    composites: {}
  }

  type UserDeviceGetPayload<S extends boolean | null | undefined | UserDeviceDefaultArgs> = $Result.GetResult<Prisma.$UserDevicePayload, S>

  type UserDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDeviceCountAggregateInputType | true
    }

  export interface UserDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDevice'], meta: { name: 'UserDevice' } }
    /**
     * Find zero or one UserDevice that matches the filter.
     * @param {UserDeviceFindUniqueArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDeviceFindUniqueArgs>(args: SelectSubset<T, UserDeviceFindUniqueArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDeviceFindUniqueOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDeviceFindFirstArgs>(args?: SelectSubset<T, UserDeviceFindFirstArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindFirstOrThrowArgs} args - Arguments to find a UserDevice
     * @example
     * // Get one UserDevice
     * const userDevice = await prisma.userDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDevices
     * const userDevices = await prisma.userDevice.findMany()
     * 
     * // Get first 10 UserDevices
     * const userDevices = await prisma.userDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDeviceFindManyArgs>(args?: SelectSubset<T, UserDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDevice.
     * @param {UserDeviceCreateArgs} args - Arguments to create a UserDevice.
     * @example
     * // Create one UserDevice
     * const UserDevice = await prisma.userDevice.create({
     *   data: {
     *     // ... data to create a UserDevice
     *   }
     * })
     * 
     */
    create<T extends UserDeviceCreateArgs>(args: SelectSubset<T, UserDeviceCreateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDevices.
     * @param {UserDeviceCreateManyArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDeviceCreateManyArgs>(args?: SelectSubset<T, UserDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDevices and returns the data saved in the database.
     * @param {UserDeviceCreateManyAndReturnArgs} args - Arguments to create many UserDevices.
     * @example
     * // Create many UserDevices
     * const userDevice = await prisma.userDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDevice.
     * @param {UserDeviceDeleteArgs} args - Arguments to delete one UserDevice.
     * @example
     * // Delete one UserDevice
     * const UserDevice = await prisma.userDevice.delete({
     *   where: {
     *     // ... filter to delete one UserDevice
     *   }
     * })
     * 
     */
    delete<T extends UserDeviceDeleteArgs>(args: SelectSubset<T, UserDeviceDeleteArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDevice.
     * @param {UserDeviceUpdateArgs} args - Arguments to update one UserDevice.
     * @example
     * // Update one UserDevice
     * const userDevice = await prisma.userDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDeviceUpdateArgs>(args: SelectSubset<T, UserDeviceUpdateArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDevices.
     * @param {UserDeviceDeleteManyArgs} args - Arguments to filter UserDevices to delete.
     * @example
     * // Delete a few UserDevices
     * const { count } = await prisma.userDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeviceDeleteManyArgs>(args?: SelectSubset<T, UserDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDeviceUpdateManyArgs>(args: SelectSubset<T, UserDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDevices and returns the data updated in the database.
     * @param {UserDeviceUpdateManyAndReturnArgs} args - Arguments to update many UserDevices.
     * @example
     * // Update many UserDevices
     * const userDevice = await prisma.userDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDevices and only return the `id`
     * const userDeviceWithIdOnly = await prisma.userDevice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDevice.
     * @param {UserDeviceUpsertArgs} args - Arguments to update or create a UserDevice.
     * @example
     * // Update or create a UserDevice
     * const userDevice = await prisma.userDevice.upsert({
     *   create: {
     *     // ... data to create a UserDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDevice we want to update
     *   }
     * })
     */
    upsert<T extends UserDeviceUpsertArgs>(args: SelectSubset<T, UserDeviceUpsertArgs<ExtArgs>>): Prisma__UserDeviceClient<$Result.GetResult<Prisma.$UserDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceCountArgs} args - Arguments to filter UserDevices to count.
     * @example
     * // Count the number of UserDevices
     * const count = await prisma.userDevice.count({
     *   where: {
     *     // ... the filter for the UserDevices we want to count
     *   }
     * })
    **/
    count<T extends UserDeviceCountArgs>(
      args?: Subset<T, UserDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDeviceAggregateArgs>(args: Subset<T, UserDeviceAggregateArgs>): Prisma.PrismaPromise<GetUserDeviceAggregateType<T>>

    /**
     * Group by UserDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDeviceGroupByArgs['orderBy'] }
        : { orderBy?: UserDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDevice model
   */
  readonly fields: UserDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDevice model
   */
  interface UserDeviceFieldRefs {
    readonly id: FieldRef<"UserDevice", 'String'>
    readonly userId: FieldRef<"UserDevice", 'String'>
    readonly deviceCode: FieldRef<"UserDevice", 'String'>
    readonly createdAt: FieldRef<"UserDevice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDevice findUnique
   */
  export type UserDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findUniqueOrThrow
   */
  export type UserDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice findFirst
   */
  export type UserDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findFirstOrThrow
   */
  export type UserDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevice to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDevices.
     */
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice findMany
   */
  export type UserDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter, which UserDevices to fetch.
     */
    where?: UserDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDevices to fetch.
     */
    orderBy?: UserDeviceOrderByWithRelationInput | UserDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDevices.
     */
    cursor?: UserDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDevices.
     */
    skip?: number
    distinct?: UserDeviceScalarFieldEnum | UserDeviceScalarFieldEnum[]
  }

  /**
   * UserDevice create
   */
  export type UserDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDevice.
     */
    data: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
  }

  /**
   * UserDevice createMany
   */
  export type UserDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDevice createManyAndReturn
   */
  export type UserDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many UserDevices.
     */
    data: UserDeviceCreateManyInput | UserDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDevice update
   */
  export type UserDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDevice.
     */
    data: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
    /**
     * Choose, which UserDevice to update.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice updateMany
   */
  export type UserDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDevices.
     */
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyInput>
    /**
     * Filter which UserDevices to update
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number
  }

  /**
   * UserDevice updateManyAndReturn
   */
  export type UserDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * The data used to update UserDevices.
     */
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyInput>
    /**
     * Filter which UserDevices to update
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDevice upsert
   */
  export type UserDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDevice to update in case it exists.
     */
    where: UserDeviceWhereUniqueInput
    /**
     * In case the UserDevice found by the `where` argument doesn't exist, create a new UserDevice with this data.
     */
    create: XOR<UserDeviceCreateInput, UserDeviceUncheckedCreateInput>
    /**
     * In case the UserDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDeviceUpdateInput, UserDeviceUncheckedUpdateInput>
  }

  /**
   * UserDevice delete
   */
  export type UserDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
    /**
     * Filter which UserDevice to delete.
     */
    where: UserDeviceWhereUniqueInput
  }

  /**
   * UserDevice deleteMany
   */
  export type UserDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDevices to delete
     */
    where?: UserDeviceWhereInput
    /**
     * Limit how many UserDevices to delete.
     */
    limit?: number
  }

  /**
   * UserDevice without action
   */
  export type UserDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDevice
     */
    select?: UserDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDevice
     */
    omit?: UserDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDeviceInclude<ExtArgs> | null
  }


  /**
   * Model Detection_sessions
   */

  export type AggregateDetection_sessions = {
    _count: Detection_sessionsCountAggregateOutputType | null
    _avg: Detection_sessionsAvgAggregateOutputType | null
    _sum: Detection_sessionsSumAggregateOutputType | null
    _min: Detection_sessionsMinAggregateOutputType | null
    _max: Detection_sessionsMaxAggregateOutputType | null
  }

  export type Detection_sessionsAvgAggregateOutputType = {
    totalBaik: number | null
    totalCacat: number | null
  }

  export type Detection_sessionsSumAggregateOutputType = {
    totalBaik: number | null
    totalCacat: number | null
  }

  export type Detection_sessionsMinAggregateOutputType = {
    id: string | null
    startedAt: Date | null
    endedAt: Date | null
    totalBaik: number | null
    totalCacat: number | null
    monthSummaryId: string | null
  }

  export type Detection_sessionsMaxAggregateOutputType = {
    id: string | null
    startedAt: Date | null
    endedAt: Date | null
    totalBaik: number | null
    totalCacat: number | null
    monthSummaryId: string | null
  }

  export type Detection_sessionsCountAggregateOutputType = {
    id: number
    startedAt: number
    endedAt: number
    totalBaik: number
    totalCacat: number
    monthSummaryId: number
    _all: number
  }


  export type Detection_sessionsAvgAggregateInputType = {
    totalBaik?: true
    totalCacat?: true
  }

  export type Detection_sessionsSumAggregateInputType = {
    totalBaik?: true
    totalCacat?: true
  }

  export type Detection_sessionsMinAggregateInputType = {
    id?: true
    startedAt?: true
    endedAt?: true
    totalBaik?: true
    totalCacat?: true
    monthSummaryId?: true
  }

  export type Detection_sessionsMaxAggregateInputType = {
    id?: true
    startedAt?: true
    endedAt?: true
    totalBaik?: true
    totalCacat?: true
    monthSummaryId?: true
  }

  export type Detection_sessionsCountAggregateInputType = {
    id?: true
    startedAt?: true
    endedAt?: true
    totalBaik?: true
    totalCacat?: true
    monthSummaryId?: true
    _all?: true
  }

  export type Detection_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection_sessions to aggregate.
     */
    where?: Detection_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_sessions to fetch.
     */
    orderBy?: Detection_sessionsOrderByWithRelationInput | Detection_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Detection_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detection_sessions
    **/
    _count?: true | Detection_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detection_sessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detection_sessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detection_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detection_sessionsMaxAggregateInputType
  }

  export type GetDetection_sessionsAggregateType<T extends Detection_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateDetection_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetection_sessions[P]>
      : GetScalarType<T[P], AggregateDetection_sessions[P]>
  }




  export type Detection_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detection_sessionsWhereInput
    orderBy?: Detection_sessionsOrderByWithAggregationInput | Detection_sessionsOrderByWithAggregationInput[]
    by: Detection_sessionsScalarFieldEnum[] | Detection_sessionsScalarFieldEnum
    having?: Detection_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detection_sessionsCountAggregateInputType | true
    _avg?: Detection_sessionsAvgAggregateInputType
    _sum?: Detection_sessionsSumAggregateInputType
    _min?: Detection_sessionsMinAggregateInputType
    _max?: Detection_sessionsMaxAggregateInputType
  }

  export type Detection_sessionsGroupByOutputType = {
    id: string
    startedAt: Date
    endedAt: Date | null
    totalBaik: number
    totalCacat: number
    monthSummaryId: string | null
    _count: Detection_sessionsCountAggregateOutputType | null
    _avg: Detection_sessionsAvgAggregateOutputType | null
    _sum: Detection_sessionsSumAggregateOutputType | null
    _min: Detection_sessionsMinAggregateOutputType | null
    _max: Detection_sessionsMaxAggregateOutputType | null
  }

  type GetDetection_sessionsGroupByPayload<T extends Detection_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detection_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detection_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detection_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], Detection_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type Detection_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    endedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    monthSummaryId?: boolean
    records?: boolean | Detection_sessions$recordsArgs<ExtArgs>
    monthSummary?: boolean | Detection_sessions$monthSummaryArgs<ExtArgs>
    _count?: boolean | Detection_sessionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection_sessions"]>

  export type Detection_sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    endedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    monthSummaryId?: boolean
    monthSummary?: boolean | Detection_sessions$monthSummaryArgs<ExtArgs>
  }, ExtArgs["result"]["detection_sessions"]>

  export type Detection_sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    endedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    monthSummaryId?: boolean
    monthSummary?: boolean | Detection_sessions$monthSummaryArgs<ExtArgs>
  }, ExtArgs["result"]["detection_sessions"]>

  export type Detection_sessionsSelectScalar = {
    id?: boolean
    startedAt?: boolean
    endedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    monthSummaryId?: boolean
  }

  export type Detection_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startedAt" | "endedAt" | "totalBaik" | "totalCacat" | "monthSummaryId", ExtArgs["result"]["detection_sessions"]>
  export type Detection_sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    records?: boolean | Detection_sessions$recordsArgs<ExtArgs>
    monthSummary?: boolean | Detection_sessions$monthSummaryArgs<ExtArgs>
    _count?: boolean | Detection_sessionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Detection_sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthSummary?: boolean | Detection_sessions$monthSummaryArgs<ExtArgs>
  }
  export type Detection_sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthSummary?: boolean | Detection_sessions$monthSummaryArgs<ExtArgs>
  }

  export type $Detection_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detection_sessions"
    objects: {
      records: Prisma.$Detection_recordsPayload<ExtArgs>[]
      monthSummary: Prisma.$Detection_monthlyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startedAt: Date
      endedAt: Date | null
      totalBaik: number
      totalCacat: number
      monthSummaryId: string | null
    }, ExtArgs["result"]["detection_sessions"]>
    composites: {}
  }

  type Detection_sessionsGetPayload<S extends boolean | null | undefined | Detection_sessionsDefaultArgs> = $Result.GetResult<Prisma.$Detection_sessionsPayload, S>

  type Detection_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Detection_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detection_sessionsCountAggregateInputType | true
    }

  export interface Detection_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detection_sessions'], meta: { name: 'Detection_sessions' } }
    /**
     * Find zero or one Detection_sessions that matches the filter.
     * @param {Detection_sessionsFindUniqueArgs} args - Arguments to find a Detection_sessions
     * @example
     * // Get one Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Detection_sessionsFindUniqueArgs>(args: SelectSubset<T, Detection_sessionsFindUniqueArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detection_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Detection_sessionsFindUniqueOrThrowArgs} args - Arguments to find a Detection_sessions
     * @example
     * // Get one Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Detection_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, Detection_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_sessionsFindFirstArgs} args - Arguments to find a Detection_sessions
     * @example
     * // Get one Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Detection_sessionsFindFirstArgs>(args?: SelectSubset<T, Detection_sessionsFindFirstArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_sessionsFindFirstOrThrowArgs} args - Arguments to find a Detection_sessions
     * @example
     * // Get one Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Detection_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, Detection_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detection_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.findMany()
     * 
     * // Get first 10 Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detection_sessionsWithIdOnly = await prisma.detection_sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Detection_sessionsFindManyArgs>(args?: SelectSubset<T, Detection_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detection_sessions.
     * @param {Detection_sessionsCreateArgs} args - Arguments to create a Detection_sessions.
     * @example
     * // Create one Detection_sessions
     * const Detection_sessions = await prisma.detection_sessions.create({
     *   data: {
     *     // ... data to create a Detection_sessions
     *   }
     * })
     * 
     */
    create<T extends Detection_sessionsCreateArgs>(args: SelectSubset<T, Detection_sessionsCreateArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detection_sessions.
     * @param {Detection_sessionsCreateManyArgs} args - Arguments to create many Detection_sessions.
     * @example
     * // Create many Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Detection_sessionsCreateManyArgs>(args?: SelectSubset<T, Detection_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detection_sessions and returns the data saved in the database.
     * @param {Detection_sessionsCreateManyAndReturnArgs} args - Arguments to create many Detection_sessions.
     * @example
     * // Create many Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detection_sessions and only return the `id`
     * const detection_sessionsWithIdOnly = await prisma.detection_sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Detection_sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, Detection_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detection_sessions.
     * @param {Detection_sessionsDeleteArgs} args - Arguments to delete one Detection_sessions.
     * @example
     * // Delete one Detection_sessions
     * const Detection_sessions = await prisma.detection_sessions.delete({
     *   where: {
     *     // ... filter to delete one Detection_sessions
     *   }
     * })
     * 
     */
    delete<T extends Detection_sessionsDeleteArgs>(args: SelectSubset<T, Detection_sessionsDeleteArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detection_sessions.
     * @param {Detection_sessionsUpdateArgs} args - Arguments to update one Detection_sessions.
     * @example
     * // Update one Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Detection_sessionsUpdateArgs>(args: SelectSubset<T, Detection_sessionsUpdateArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detection_sessions.
     * @param {Detection_sessionsDeleteManyArgs} args - Arguments to filter Detection_sessions to delete.
     * @example
     * // Delete a few Detection_sessions
     * const { count } = await prisma.detection_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Detection_sessionsDeleteManyArgs>(args?: SelectSubset<T, Detection_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detection_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Detection_sessionsUpdateManyArgs>(args: SelectSubset<T, Detection_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detection_sessions and returns the data updated in the database.
     * @param {Detection_sessionsUpdateManyAndReturnArgs} args - Arguments to update many Detection_sessions.
     * @example
     * // Update many Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detection_sessions and only return the `id`
     * const detection_sessionsWithIdOnly = await prisma.detection_sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Detection_sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, Detection_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detection_sessions.
     * @param {Detection_sessionsUpsertArgs} args - Arguments to update or create a Detection_sessions.
     * @example
     * // Update or create a Detection_sessions
     * const detection_sessions = await prisma.detection_sessions.upsert({
     *   create: {
     *     // ... data to create a Detection_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detection_sessions we want to update
     *   }
     * })
     */
    upsert<T extends Detection_sessionsUpsertArgs>(args: SelectSubset<T, Detection_sessionsUpsertArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detection_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_sessionsCountArgs} args - Arguments to filter Detection_sessions to count.
     * @example
     * // Count the number of Detection_sessions
     * const count = await prisma.detection_sessions.count({
     *   where: {
     *     // ... the filter for the Detection_sessions we want to count
     *   }
     * })
    **/
    count<T extends Detection_sessionsCountArgs>(
      args?: Subset<T, Detection_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detection_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detection_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detection_sessionsAggregateArgs>(args: Subset<T, Detection_sessionsAggregateArgs>): Prisma.PrismaPromise<GetDetection_sessionsAggregateType<T>>

    /**
     * Group by Detection_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Detection_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Detection_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: Detection_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Detection_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetection_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detection_sessions model
   */
  readonly fields: Detection_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detection_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Detection_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    records<T extends Detection_sessions$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Detection_sessions$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthSummary<T extends Detection_sessions$monthSummaryArgs<ExtArgs> = {}>(args?: Subset<T, Detection_sessions$monthSummaryArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detection_sessions model
   */
  interface Detection_sessionsFieldRefs {
    readonly id: FieldRef<"Detection_sessions", 'String'>
    readonly startedAt: FieldRef<"Detection_sessions", 'DateTime'>
    readonly endedAt: FieldRef<"Detection_sessions", 'DateTime'>
    readonly totalBaik: FieldRef<"Detection_sessions", 'Int'>
    readonly totalCacat: FieldRef<"Detection_sessions", 'Int'>
    readonly monthSummaryId: FieldRef<"Detection_sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Detection_sessions findUnique
   */
  export type Detection_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_sessions to fetch.
     */
    where: Detection_sessionsWhereUniqueInput
  }

  /**
   * Detection_sessions findUniqueOrThrow
   */
  export type Detection_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_sessions to fetch.
     */
    where: Detection_sessionsWhereUniqueInput
  }

  /**
   * Detection_sessions findFirst
   */
  export type Detection_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_sessions to fetch.
     */
    where?: Detection_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_sessions to fetch.
     */
    orderBy?: Detection_sessionsOrderByWithRelationInput | Detection_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detection_sessions.
     */
    cursor?: Detection_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detection_sessions.
     */
    distinct?: Detection_sessionsScalarFieldEnum | Detection_sessionsScalarFieldEnum[]
  }

  /**
   * Detection_sessions findFirstOrThrow
   */
  export type Detection_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_sessions to fetch.
     */
    where?: Detection_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_sessions to fetch.
     */
    orderBy?: Detection_sessionsOrderByWithRelationInput | Detection_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detection_sessions.
     */
    cursor?: Detection_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detection_sessions.
     */
    distinct?: Detection_sessionsScalarFieldEnum | Detection_sessionsScalarFieldEnum[]
  }

  /**
   * Detection_sessions findMany
   */
  export type Detection_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_sessions to fetch.
     */
    where?: Detection_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_sessions to fetch.
     */
    orderBy?: Detection_sessionsOrderByWithRelationInput | Detection_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detection_sessions.
     */
    cursor?: Detection_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_sessions.
     */
    skip?: number
    distinct?: Detection_sessionsScalarFieldEnum | Detection_sessionsScalarFieldEnum[]
  }

  /**
   * Detection_sessions create
   */
  export type Detection_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Detection_sessions.
     */
    data?: XOR<Detection_sessionsCreateInput, Detection_sessionsUncheckedCreateInput>
  }

  /**
   * Detection_sessions createMany
   */
  export type Detection_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detection_sessions.
     */
    data: Detection_sessionsCreateManyInput | Detection_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detection_sessions createManyAndReturn
   */
  export type Detection_sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Detection_sessions.
     */
    data: Detection_sessionsCreateManyInput | Detection_sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection_sessions update
   */
  export type Detection_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Detection_sessions.
     */
    data: XOR<Detection_sessionsUpdateInput, Detection_sessionsUncheckedUpdateInput>
    /**
     * Choose, which Detection_sessions to update.
     */
    where: Detection_sessionsWhereUniqueInput
  }

  /**
   * Detection_sessions updateMany
   */
  export type Detection_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detection_sessions.
     */
    data: XOR<Detection_sessionsUpdateManyMutationInput, Detection_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which Detection_sessions to update
     */
    where?: Detection_sessionsWhereInput
    /**
     * Limit how many Detection_sessions to update.
     */
    limit?: number
  }

  /**
   * Detection_sessions updateManyAndReturn
   */
  export type Detection_sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * The data used to update Detection_sessions.
     */
    data: XOR<Detection_sessionsUpdateManyMutationInput, Detection_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which Detection_sessions to update
     */
    where?: Detection_sessionsWhereInput
    /**
     * Limit how many Detection_sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection_sessions upsert
   */
  export type Detection_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Detection_sessions to update in case it exists.
     */
    where: Detection_sessionsWhereUniqueInput
    /**
     * In case the Detection_sessions found by the `where` argument doesn't exist, create a new Detection_sessions with this data.
     */
    create: XOR<Detection_sessionsCreateInput, Detection_sessionsUncheckedCreateInput>
    /**
     * In case the Detection_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Detection_sessionsUpdateInput, Detection_sessionsUncheckedUpdateInput>
  }

  /**
   * Detection_sessions delete
   */
  export type Detection_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    /**
     * Filter which Detection_sessions to delete.
     */
    where: Detection_sessionsWhereUniqueInput
  }

  /**
   * Detection_sessions deleteMany
   */
  export type Detection_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection_sessions to delete
     */
    where?: Detection_sessionsWhereInput
    /**
     * Limit how many Detection_sessions to delete.
     */
    limit?: number
  }

  /**
   * Detection_sessions.records
   */
  export type Detection_sessions$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    where?: Detection_recordsWhereInput
    orderBy?: Detection_recordsOrderByWithRelationInput | Detection_recordsOrderByWithRelationInput[]
    cursor?: Detection_recordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detection_recordsScalarFieldEnum | Detection_recordsScalarFieldEnum[]
  }

  /**
   * Detection_sessions.monthSummary
   */
  export type Detection_sessions$monthSummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    where?: Detection_monthlyWhereInput
  }

  /**
   * Detection_sessions without action
   */
  export type Detection_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
  }


  /**
   * Model Detection_records
   */

  export type AggregateDetection_records = {
    _count: Detection_recordsCountAggregateOutputType | null
    _avg: Detection_recordsAvgAggregateOutputType | null
    _sum: Detection_recordsSumAggregateOutputType | null
    _min: Detection_recordsMinAggregateOutputType | null
    _max: Detection_recordsMaxAggregateOutputType | null
  }

  export type Detection_recordsAvgAggregateOutputType = {
    baik: number | null
    cacat: number | null
    totalBaik: number | null
    totalCacat: number | null
  }

  export type Detection_recordsSumAggregateOutputType = {
    baik: number | null
    cacat: number | null
    totalBaik: number | null
    totalCacat: number | null
  }

  export type Detection_recordsMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    baik: number | null
    cacat: number | null
    totalBaik: number | null
    totalCacat: number | null
    sessionId: string | null
  }

  export type Detection_recordsMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    baik: number | null
    cacat: number | null
    totalBaik: number | null
    totalCacat: number | null
    sessionId: string | null
  }

  export type Detection_recordsCountAggregateOutputType = {
    id: number
    timestamp: number
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
    sessionId: number
    _all: number
  }


  export type Detection_recordsAvgAggregateInputType = {
    baik?: true
    cacat?: true
    totalBaik?: true
    totalCacat?: true
  }

  export type Detection_recordsSumAggregateInputType = {
    baik?: true
    cacat?: true
    totalBaik?: true
    totalCacat?: true
  }

  export type Detection_recordsMinAggregateInputType = {
    id?: true
    timestamp?: true
    baik?: true
    cacat?: true
    totalBaik?: true
    totalCacat?: true
    sessionId?: true
  }

  export type Detection_recordsMaxAggregateInputType = {
    id?: true
    timestamp?: true
    baik?: true
    cacat?: true
    totalBaik?: true
    totalCacat?: true
    sessionId?: true
  }

  export type Detection_recordsCountAggregateInputType = {
    id?: true
    timestamp?: true
    baik?: true
    cacat?: true
    totalBaik?: true
    totalCacat?: true
    sessionId?: true
    _all?: true
  }

  export type Detection_recordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection_records to aggregate.
     */
    where?: Detection_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_records to fetch.
     */
    orderBy?: Detection_recordsOrderByWithRelationInput | Detection_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Detection_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detection_records
    **/
    _count?: true | Detection_recordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detection_recordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detection_recordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detection_recordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detection_recordsMaxAggregateInputType
  }

  export type GetDetection_recordsAggregateType<T extends Detection_recordsAggregateArgs> = {
        [P in keyof T & keyof AggregateDetection_records]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetection_records[P]>
      : GetScalarType<T[P], AggregateDetection_records[P]>
  }




  export type Detection_recordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detection_recordsWhereInput
    orderBy?: Detection_recordsOrderByWithAggregationInput | Detection_recordsOrderByWithAggregationInput[]
    by: Detection_recordsScalarFieldEnum[] | Detection_recordsScalarFieldEnum
    having?: Detection_recordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detection_recordsCountAggregateInputType | true
    _avg?: Detection_recordsAvgAggregateInputType
    _sum?: Detection_recordsSumAggregateInputType
    _min?: Detection_recordsMinAggregateInputType
    _max?: Detection_recordsMaxAggregateInputType
  }

  export type Detection_recordsGroupByOutputType = {
    id: string
    timestamp: Date
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
    sessionId: string
    _count: Detection_recordsCountAggregateOutputType | null
    _avg: Detection_recordsAvgAggregateOutputType | null
    _sum: Detection_recordsSumAggregateOutputType | null
    _min: Detection_recordsMinAggregateOutputType | null
    _max: Detection_recordsMaxAggregateOutputType | null
  }

  type GetDetection_recordsGroupByPayload<T extends Detection_recordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detection_recordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detection_recordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detection_recordsGroupByOutputType[P]>
            : GetScalarType<T[P], Detection_recordsGroupByOutputType[P]>
        }
      >
    >


  export type Detection_recordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    baik?: boolean
    cacat?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    sessionId?: boolean
    session?: boolean | Detection_sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection_records"]>

  export type Detection_recordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    baik?: boolean
    cacat?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    sessionId?: boolean
    session?: boolean | Detection_sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection_records"]>

  export type Detection_recordsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    baik?: boolean
    cacat?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    sessionId?: boolean
    session?: boolean | Detection_sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection_records"]>

  export type Detection_recordsSelectScalar = {
    id?: boolean
    timestamp?: boolean
    baik?: boolean
    cacat?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    sessionId?: boolean
  }

  export type Detection_recordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "baik" | "cacat" | "totalBaik" | "totalCacat" | "sessionId", ExtArgs["result"]["detection_records"]>
  export type Detection_recordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | Detection_sessionsDefaultArgs<ExtArgs>
  }
  export type Detection_recordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | Detection_sessionsDefaultArgs<ExtArgs>
  }
  export type Detection_recordsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | Detection_sessionsDefaultArgs<ExtArgs>
  }

  export type $Detection_recordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detection_records"
    objects: {
      session: Prisma.$Detection_sessionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      baik: number
      cacat: number
      totalBaik: number
      totalCacat: number
      sessionId: string
    }, ExtArgs["result"]["detection_records"]>
    composites: {}
  }

  type Detection_recordsGetPayload<S extends boolean | null | undefined | Detection_recordsDefaultArgs> = $Result.GetResult<Prisma.$Detection_recordsPayload, S>

  type Detection_recordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Detection_recordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detection_recordsCountAggregateInputType | true
    }

  export interface Detection_recordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detection_records'], meta: { name: 'Detection_records' } }
    /**
     * Find zero or one Detection_records that matches the filter.
     * @param {Detection_recordsFindUniqueArgs} args - Arguments to find a Detection_records
     * @example
     * // Get one Detection_records
     * const detection_records = await prisma.detection_records.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Detection_recordsFindUniqueArgs>(args: SelectSubset<T, Detection_recordsFindUniqueArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detection_records that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Detection_recordsFindUniqueOrThrowArgs} args - Arguments to find a Detection_records
     * @example
     * // Get one Detection_records
     * const detection_records = await prisma.detection_records.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Detection_recordsFindUniqueOrThrowArgs>(args: SelectSubset<T, Detection_recordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_recordsFindFirstArgs} args - Arguments to find a Detection_records
     * @example
     * // Get one Detection_records
     * const detection_records = await prisma.detection_records.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Detection_recordsFindFirstArgs>(args?: SelectSubset<T, Detection_recordsFindFirstArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection_records that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_recordsFindFirstOrThrowArgs} args - Arguments to find a Detection_records
     * @example
     * // Get one Detection_records
     * const detection_records = await prisma.detection_records.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Detection_recordsFindFirstOrThrowArgs>(args?: SelectSubset<T, Detection_recordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detection_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_recordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detection_records
     * const detection_records = await prisma.detection_records.findMany()
     * 
     * // Get first 10 Detection_records
     * const detection_records = await prisma.detection_records.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detection_recordsWithIdOnly = await prisma.detection_records.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Detection_recordsFindManyArgs>(args?: SelectSubset<T, Detection_recordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detection_records.
     * @param {Detection_recordsCreateArgs} args - Arguments to create a Detection_records.
     * @example
     * // Create one Detection_records
     * const Detection_records = await prisma.detection_records.create({
     *   data: {
     *     // ... data to create a Detection_records
     *   }
     * })
     * 
     */
    create<T extends Detection_recordsCreateArgs>(args: SelectSubset<T, Detection_recordsCreateArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detection_records.
     * @param {Detection_recordsCreateManyArgs} args - Arguments to create many Detection_records.
     * @example
     * // Create many Detection_records
     * const detection_records = await prisma.detection_records.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Detection_recordsCreateManyArgs>(args?: SelectSubset<T, Detection_recordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detection_records and returns the data saved in the database.
     * @param {Detection_recordsCreateManyAndReturnArgs} args - Arguments to create many Detection_records.
     * @example
     * // Create many Detection_records
     * const detection_records = await prisma.detection_records.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detection_records and only return the `id`
     * const detection_recordsWithIdOnly = await prisma.detection_records.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Detection_recordsCreateManyAndReturnArgs>(args?: SelectSubset<T, Detection_recordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detection_records.
     * @param {Detection_recordsDeleteArgs} args - Arguments to delete one Detection_records.
     * @example
     * // Delete one Detection_records
     * const Detection_records = await prisma.detection_records.delete({
     *   where: {
     *     // ... filter to delete one Detection_records
     *   }
     * })
     * 
     */
    delete<T extends Detection_recordsDeleteArgs>(args: SelectSubset<T, Detection_recordsDeleteArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detection_records.
     * @param {Detection_recordsUpdateArgs} args - Arguments to update one Detection_records.
     * @example
     * // Update one Detection_records
     * const detection_records = await prisma.detection_records.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Detection_recordsUpdateArgs>(args: SelectSubset<T, Detection_recordsUpdateArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detection_records.
     * @param {Detection_recordsDeleteManyArgs} args - Arguments to filter Detection_records to delete.
     * @example
     * // Delete a few Detection_records
     * const { count } = await prisma.detection_records.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Detection_recordsDeleteManyArgs>(args?: SelectSubset<T, Detection_recordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detection_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_recordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detection_records
     * const detection_records = await prisma.detection_records.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Detection_recordsUpdateManyArgs>(args: SelectSubset<T, Detection_recordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detection_records and returns the data updated in the database.
     * @param {Detection_recordsUpdateManyAndReturnArgs} args - Arguments to update many Detection_records.
     * @example
     * // Update many Detection_records
     * const detection_records = await prisma.detection_records.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detection_records and only return the `id`
     * const detection_recordsWithIdOnly = await prisma.detection_records.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Detection_recordsUpdateManyAndReturnArgs>(args: SelectSubset<T, Detection_recordsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detection_records.
     * @param {Detection_recordsUpsertArgs} args - Arguments to update or create a Detection_records.
     * @example
     * // Update or create a Detection_records
     * const detection_records = await prisma.detection_records.upsert({
     *   create: {
     *     // ... data to create a Detection_records
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detection_records we want to update
     *   }
     * })
     */
    upsert<T extends Detection_recordsUpsertArgs>(args: SelectSubset<T, Detection_recordsUpsertArgs<ExtArgs>>): Prisma__Detection_recordsClient<$Result.GetResult<Prisma.$Detection_recordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detection_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_recordsCountArgs} args - Arguments to filter Detection_records to count.
     * @example
     * // Count the number of Detection_records
     * const count = await prisma.detection_records.count({
     *   where: {
     *     // ... the filter for the Detection_records we want to count
     *   }
     * })
    **/
    count<T extends Detection_recordsCountArgs>(
      args?: Subset<T, Detection_recordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detection_recordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detection_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_recordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detection_recordsAggregateArgs>(args: Subset<T, Detection_recordsAggregateArgs>): Prisma.PrismaPromise<GetDetection_recordsAggregateType<T>>

    /**
     * Group by Detection_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_recordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Detection_recordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Detection_recordsGroupByArgs['orderBy'] }
        : { orderBy?: Detection_recordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Detection_recordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetection_recordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detection_records model
   */
  readonly fields: Detection_recordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detection_records.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Detection_recordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends Detection_sessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Detection_sessionsDefaultArgs<ExtArgs>>): Prisma__Detection_sessionsClient<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detection_records model
   */
  interface Detection_recordsFieldRefs {
    readonly id: FieldRef<"Detection_records", 'String'>
    readonly timestamp: FieldRef<"Detection_records", 'DateTime'>
    readonly baik: FieldRef<"Detection_records", 'Int'>
    readonly cacat: FieldRef<"Detection_records", 'Int'>
    readonly totalBaik: FieldRef<"Detection_records", 'Int'>
    readonly totalCacat: FieldRef<"Detection_records", 'Int'>
    readonly sessionId: FieldRef<"Detection_records", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Detection_records findUnique
   */
  export type Detection_recordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_records to fetch.
     */
    where: Detection_recordsWhereUniqueInput
  }

  /**
   * Detection_records findUniqueOrThrow
   */
  export type Detection_recordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_records to fetch.
     */
    where: Detection_recordsWhereUniqueInput
  }

  /**
   * Detection_records findFirst
   */
  export type Detection_recordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_records to fetch.
     */
    where?: Detection_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_records to fetch.
     */
    orderBy?: Detection_recordsOrderByWithRelationInput | Detection_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detection_records.
     */
    cursor?: Detection_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detection_records.
     */
    distinct?: Detection_recordsScalarFieldEnum | Detection_recordsScalarFieldEnum[]
  }

  /**
   * Detection_records findFirstOrThrow
   */
  export type Detection_recordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_records to fetch.
     */
    where?: Detection_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_records to fetch.
     */
    orderBy?: Detection_recordsOrderByWithRelationInput | Detection_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detection_records.
     */
    cursor?: Detection_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detection_records.
     */
    distinct?: Detection_recordsScalarFieldEnum | Detection_recordsScalarFieldEnum[]
  }

  /**
   * Detection_records findMany
   */
  export type Detection_recordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * Filter, which Detection_records to fetch.
     */
    where?: Detection_recordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_records to fetch.
     */
    orderBy?: Detection_recordsOrderByWithRelationInput | Detection_recordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detection_records.
     */
    cursor?: Detection_recordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_records.
     */
    skip?: number
    distinct?: Detection_recordsScalarFieldEnum | Detection_recordsScalarFieldEnum[]
  }

  /**
   * Detection_records create
   */
  export type Detection_recordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * The data needed to create a Detection_records.
     */
    data: XOR<Detection_recordsCreateInput, Detection_recordsUncheckedCreateInput>
  }

  /**
   * Detection_records createMany
   */
  export type Detection_recordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detection_records.
     */
    data: Detection_recordsCreateManyInput | Detection_recordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detection_records createManyAndReturn
   */
  export type Detection_recordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * The data used to create many Detection_records.
     */
    data: Detection_recordsCreateManyInput | Detection_recordsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection_records update
   */
  export type Detection_recordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * The data needed to update a Detection_records.
     */
    data: XOR<Detection_recordsUpdateInput, Detection_recordsUncheckedUpdateInput>
    /**
     * Choose, which Detection_records to update.
     */
    where: Detection_recordsWhereUniqueInput
  }

  /**
   * Detection_records updateMany
   */
  export type Detection_recordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detection_records.
     */
    data: XOR<Detection_recordsUpdateManyMutationInput, Detection_recordsUncheckedUpdateManyInput>
    /**
     * Filter which Detection_records to update
     */
    where?: Detection_recordsWhereInput
    /**
     * Limit how many Detection_records to update.
     */
    limit?: number
  }

  /**
   * Detection_records updateManyAndReturn
   */
  export type Detection_recordsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * The data used to update Detection_records.
     */
    data: XOR<Detection_recordsUpdateManyMutationInput, Detection_recordsUncheckedUpdateManyInput>
    /**
     * Filter which Detection_records to update
     */
    where?: Detection_recordsWhereInput
    /**
     * Limit how many Detection_records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detection_records upsert
   */
  export type Detection_recordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * The filter to search for the Detection_records to update in case it exists.
     */
    where: Detection_recordsWhereUniqueInput
    /**
     * In case the Detection_records found by the `where` argument doesn't exist, create a new Detection_records with this data.
     */
    create: XOR<Detection_recordsCreateInput, Detection_recordsUncheckedCreateInput>
    /**
     * In case the Detection_records was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Detection_recordsUpdateInput, Detection_recordsUncheckedUpdateInput>
  }

  /**
   * Detection_records delete
   */
  export type Detection_recordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
    /**
     * Filter which Detection_records to delete.
     */
    where: Detection_recordsWhereUniqueInput
  }

  /**
   * Detection_records deleteMany
   */
  export type Detection_recordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection_records to delete
     */
    where?: Detection_recordsWhereInput
    /**
     * Limit how many Detection_records to delete.
     */
    limit?: number
  }

  /**
   * Detection_records without action
   */
  export type Detection_recordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_records
     */
    select?: Detection_recordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_records
     */
    omit?: Detection_recordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_recordsInclude<ExtArgs> | null
  }


  /**
   * Model Detection_monthly
   */

  export type AggregateDetection_monthly = {
    _count: Detection_monthlyCountAggregateOutputType | null
    _avg: Detection_monthlyAvgAggregateOutputType | null
    _sum: Detection_monthlySumAggregateOutputType | null
    _min: Detection_monthlyMinAggregateOutputType | null
    _max: Detection_monthlyMaxAggregateOutputType | null
  }

  export type Detection_monthlyAvgAggregateOutputType = {
    year: number | null
    month: number | null
    totalBaik: number | null
    totalCacat: number | null
    totalPanen: number | null
    avgBaikPerSesi: number | null
    avgCacatPerSesi: number | null
    persenBaik: number | null
    jumlahSesi: number | null
  }

  export type Detection_monthlySumAggregateOutputType = {
    year: number | null
    month: number | null
    totalBaik: number | null
    totalCacat: number | null
    totalPanen: number | null
    avgBaikPerSesi: number | null
    avgCacatPerSesi: number | null
    persenBaik: number | null
    jumlahSesi: number | null
  }

  export type Detection_monthlyMinAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    updatedAt: Date | null
    totalBaik: number | null
    totalCacat: number | null
    totalPanen: number | null
    avgBaikPerSesi: number | null
    avgCacatPerSesi: number | null
    persenBaik: number | null
    jumlahSesi: number | null
  }

  export type Detection_monthlyMaxAggregateOutputType = {
    id: string | null
    year: number | null
    month: number | null
    updatedAt: Date | null
    totalBaik: number | null
    totalCacat: number | null
    totalPanen: number | null
    avgBaikPerSesi: number | null
    avgCacatPerSesi: number | null
    persenBaik: number | null
    jumlahSesi: number | null
  }

  export type Detection_monthlyCountAggregateOutputType = {
    id: number
    year: number
    month: number
    updatedAt: number
    totalBaik: number
    totalCacat: number
    totalPanen: number
    avgBaikPerSesi: number
    avgCacatPerSesi: number
    persenBaik: number
    jumlahSesi: number
    _all: number
  }


  export type Detection_monthlyAvgAggregateInputType = {
    year?: true
    month?: true
    totalBaik?: true
    totalCacat?: true
    totalPanen?: true
    avgBaikPerSesi?: true
    avgCacatPerSesi?: true
    persenBaik?: true
    jumlahSesi?: true
  }

  export type Detection_monthlySumAggregateInputType = {
    year?: true
    month?: true
    totalBaik?: true
    totalCacat?: true
    totalPanen?: true
    avgBaikPerSesi?: true
    avgCacatPerSesi?: true
    persenBaik?: true
    jumlahSesi?: true
  }

  export type Detection_monthlyMinAggregateInputType = {
    id?: true
    year?: true
    month?: true
    updatedAt?: true
    totalBaik?: true
    totalCacat?: true
    totalPanen?: true
    avgBaikPerSesi?: true
    avgCacatPerSesi?: true
    persenBaik?: true
    jumlahSesi?: true
  }

  export type Detection_monthlyMaxAggregateInputType = {
    id?: true
    year?: true
    month?: true
    updatedAt?: true
    totalBaik?: true
    totalCacat?: true
    totalPanen?: true
    avgBaikPerSesi?: true
    avgCacatPerSesi?: true
    persenBaik?: true
    jumlahSesi?: true
  }

  export type Detection_monthlyCountAggregateInputType = {
    id?: true
    year?: true
    month?: true
    updatedAt?: true
    totalBaik?: true
    totalCacat?: true
    totalPanen?: true
    avgBaikPerSesi?: true
    avgCacatPerSesi?: true
    persenBaik?: true
    jumlahSesi?: true
    _all?: true
  }

  export type Detection_monthlyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection_monthly to aggregate.
     */
    where?: Detection_monthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_monthlies to fetch.
     */
    orderBy?: Detection_monthlyOrderByWithRelationInput | Detection_monthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Detection_monthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_monthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_monthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detection_monthlies
    **/
    _count?: true | Detection_monthlyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detection_monthlyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detection_monthlySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detection_monthlyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detection_monthlyMaxAggregateInputType
  }

  export type GetDetection_monthlyAggregateType<T extends Detection_monthlyAggregateArgs> = {
        [P in keyof T & keyof AggregateDetection_monthly]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetection_monthly[P]>
      : GetScalarType<T[P], AggregateDetection_monthly[P]>
  }




  export type Detection_monthlyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detection_monthlyWhereInput
    orderBy?: Detection_monthlyOrderByWithAggregationInput | Detection_monthlyOrderByWithAggregationInput[]
    by: Detection_monthlyScalarFieldEnum[] | Detection_monthlyScalarFieldEnum
    having?: Detection_monthlyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detection_monthlyCountAggregateInputType | true
    _avg?: Detection_monthlyAvgAggregateInputType
    _sum?: Detection_monthlySumAggregateInputType
    _min?: Detection_monthlyMinAggregateInputType
    _max?: Detection_monthlyMaxAggregateInputType
  }

  export type Detection_monthlyGroupByOutputType = {
    id: string
    year: number
    month: number
    updatedAt: Date
    totalBaik: number
    totalCacat: number
    totalPanen: number
    avgBaikPerSesi: number
    avgCacatPerSesi: number
    persenBaik: number
    jumlahSesi: number
    _count: Detection_monthlyCountAggregateOutputType | null
    _avg: Detection_monthlyAvgAggregateOutputType | null
    _sum: Detection_monthlySumAggregateOutputType | null
    _min: Detection_monthlyMinAggregateOutputType | null
    _max: Detection_monthlyMaxAggregateOutputType | null
  }

  type GetDetection_monthlyGroupByPayload<T extends Detection_monthlyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detection_monthlyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detection_monthlyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detection_monthlyGroupByOutputType[P]>
            : GetScalarType<T[P], Detection_monthlyGroupByOutputType[P]>
        }
      >
    >


  export type Detection_monthlySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    updatedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    totalPanen?: boolean
    avgBaikPerSesi?: boolean
    avgCacatPerSesi?: boolean
    persenBaik?: boolean
    jumlahSesi?: boolean
    sessions?: boolean | Detection_monthly$sessionsArgs<ExtArgs>
    _count?: boolean | Detection_monthlyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detection_monthly"]>

  export type Detection_monthlySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    updatedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    totalPanen?: boolean
    avgBaikPerSesi?: boolean
    avgCacatPerSesi?: boolean
    persenBaik?: boolean
    jumlahSesi?: boolean
  }, ExtArgs["result"]["detection_monthly"]>

  export type Detection_monthlySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    updatedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    totalPanen?: boolean
    avgBaikPerSesi?: boolean
    avgCacatPerSesi?: boolean
    persenBaik?: boolean
    jumlahSesi?: boolean
  }, ExtArgs["result"]["detection_monthly"]>

  export type Detection_monthlySelectScalar = {
    id?: boolean
    year?: boolean
    month?: boolean
    updatedAt?: boolean
    totalBaik?: boolean
    totalCacat?: boolean
    totalPanen?: boolean
    avgBaikPerSesi?: boolean
    avgCacatPerSesi?: boolean
    persenBaik?: boolean
    jumlahSesi?: boolean
  }

  export type Detection_monthlyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "month" | "updatedAt" | "totalBaik" | "totalCacat" | "totalPanen" | "avgBaikPerSesi" | "avgCacatPerSesi" | "persenBaik" | "jumlahSesi", ExtArgs["result"]["detection_monthly"]>
  export type Detection_monthlyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Detection_monthly$sessionsArgs<ExtArgs>
    _count?: boolean | Detection_monthlyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Detection_monthlyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Detection_monthlyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Detection_monthlyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detection_monthly"
    objects: {
      sessions: Prisma.$Detection_sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: number
      month: number
      updatedAt: Date
      totalBaik: number
      totalCacat: number
      totalPanen: number
      avgBaikPerSesi: number
      avgCacatPerSesi: number
      persenBaik: number
      jumlahSesi: number
    }, ExtArgs["result"]["detection_monthly"]>
    composites: {}
  }

  type Detection_monthlyGetPayload<S extends boolean | null | undefined | Detection_monthlyDefaultArgs> = $Result.GetResult<Prisma.$Detection_monthlyPayload, S>

  type Detection_monthlyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Detection_monthlyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detection_monthlyCountAggregateInputType | true
    }

  export interface Detection_monthlyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detection_monthly'], meta: { name: 'Detection_monthly' } }
    /**
     * Find zero or one Detection_monthly that matches the filter.
     * @param {Detection_monthlyFindUniqueArgs} args - Arguments to find a Detection_monthly
     * @example
     * // Get one Detection_monthly
     * const detection_monthly = await prisma.detection_monthly.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Detection_monthlyFindUniqueArgs>(args: SelectSubset<T, Detection_monthlyFindUniqueArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detection_monthly that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Detection_monthlyFindUniqueOrThrowArgs} args - Arguments to find a Detection_monthly
     * @example
     * // Get one Detection_monthly
     * const detection_monthly = await prisma.detection_monthly.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Detection_monthlyFindUniqueOrThrowArgs>(args: SelectSubset<T, Detection_monthlyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection_monthly that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_monthlyFindFirstArgs} args - Arguments to find a Detection_monthly
     * @example
     * // Get one Detection_monthly
     * const detection_monthly = await prisma.detection_monthly.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Detection_monthlyFindFirstArgs>(args?: SelectSubset<T, Detection_monthlyFindFirstArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detection_monthly that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_monthlyFindFirstOrThrowArgs} args - Arguments to find a Detection_monthly
     * @example
     * // Get one Detection_monthly
     * const detection_monthly = await prisma.detection_monthly.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Detection_monthlyFindFirstOrThrowArgs>(args?: SelectSubset<T, Detection_monthlyFindFirstOrThrowArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detection_monthlies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_monthlyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detection_monthlies
     * const detection_monthlies = await prisma.detection_monthly.findMany()
     * 
     * // Get first 10 Detection_monthlies
     * const detection_monthlies = await prisma.detection_monthly.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detection_monthlyWithIdOnly = await prisma.detection_monthly.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Detection_monthlyFindManyArgs>(args?: SelectSubset<T, Detection_monthlyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detection_monthly.
     * @param {Detection_monthlyCreateArgs} args - Arguments to create a Detection_monthly.
     * @example
     * // Create one Detection_monthly
     * const Detection_monthly = await prisma.detection_monthly.create({
     *   data: {
     *     // ... data to create a Detection_monthly
     *   }
     * })
     * 
     */
    create<T extends Detection_monthlyCreateArgs>(args: SelectSubset<T, Detection_monthlyCreateArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detection_monthlies.
     * @param {Detection_monthlyCreateManyArgs} args - Arguments to create many Detection_monthlies.
     * @example
     * // Create many Detection_monthlies
     * const detection_monthly = await prisma.detection_monthly.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Detection_monthlyCreateManyArgs>(args?: SelectSubset<T, Detection_monthlyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detection_monthlies and returns the data saved in the database.
     * @param {Detection_monthlyCreateManyAndReturnArgs} args - Arguments to create many Detection_monthlies.
     * @example
     * // Create many Detection_monthlies
     * const detection_monthly = await prisma.detection_monthly.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detection_monthlies and only return the `id`
     * const detection_monthlyWithIdOnly = await prisma.detection_monthly.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Detection_monthlyCreateManyAndReturnArgs>(args?: SelectSubset<T, Detection_monthlyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detection_monthly.
     * @param {Detection_monthlyDeleteArgs} args - Arguments to delete one Detection_monthly.
     * @example
     * // Delete one Detection_monthly
     * const Detection_monthly = await prisma.detection_monthly.delete({
     *   where: {
     *     // ... filter to delete one Detection_monthly
     *   }
     * })
     * 
     */
    delete<T extends Detection_monthlyDeleteArgs>(args: SelectSubset<T, Detection_monthlyDeleteArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detection_monthly.
     * @param {Detection_monthlyUpdateArgs} args - Arguments to update one Detection_monthly.
     * @example
     * // Update one Detection_monthly
     * const detection_monthly = await prisma.detection_monthly.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Detection_monthlyUpdateArgs>(args: SelectSubset<T, Detection_monthlyUpdateArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detection_monthlies.
     * @param {Detection_monthlyDeleteManyArgs} args - Arguments to filter Detection_monthlies to delete.
     * @example
     * // Delete a few Detection_monthlies
     * const { count } = await prisma.detection_monthly.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Detection_monthlyDeleteManyArgs>(args?: SelectSubset<T, Detection_monthlyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detection_monthlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_monthlyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detection_monthlies
     * const detection_monthly = await prisma.detection_monthly.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Detection_monthlyUpdateManyArgs>(args: SelectSubset<T, Detection_monthlyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detection_monthlies and returns the data updated in the database.
     * @param {Detection_monthlyUpdateManyAndReturnArgs} args - Arguments to update many Detection_monthlies.
     * @example
     * // Update many Detection_monthlies
     * const detection_monthly = await prisma.detection_monthly.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detection_monthlies and only return the `id`
     * const detection_monthlyWithIdOnly = await prisma.detection_monthly.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Detection_monthlyUpdateManyAndReturnArgs>(args: SelectSubset<T, Detection_monthlyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detection_monthly.
     * @param {Detection_monthlyUpsertArgs} args - Arguments to update or create a Detection_monthly.
     * @example
     * // Update or create a Detection_monthly
     * const detection_monthly = await prisma.detection_monthly.upsert({
     *   create: {
     *     // ... data to create a Detection_monthly
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detection_monthly we want to update
     *   }
     * })
     */
    upsert<T extends Detection_monthlyUpsertArgs>(args: SelectSubset<T, Detection_monthlyUpsertArgs<ExtArgs>>): Prisma__Detection_monthlyClient<$Result.GetResult<Prisma.$Detection_monthlyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detection_monthlies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_monthlyCountArgs} args - Arguments to filter Detection_monthlies to count.
     * @example
     * // Count the number of Detection_monthlies
     * const count = await prisma.detection_monthly.count({
     *   where: {
     *     // ... the filter for the Detection_monthlies we want to count
     *   }
     * })
    **/
    count<T extends Detection_monthlyCountArgs>(
      args?: Subset<T, Detection_monthlyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detection_monthlyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detection_monthly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_monthlyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detection_monthlyAggregateArgs>(args: Subset<T, Detection_monthlyAggregateArgs>): Prisma.PrismaPromise<GetDetection_monthlyAggregateType<T>>

    /**
     * Group by Detection_monthly.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detection_monthlyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Detection_monthlyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Detection_monthlyGroupByArgs['orderBy'] }
        : { orderBy?: Detection_monthlyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Detection_monthlyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetection_monthlyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detection_monthly model
   */
  readonly fields: Detection_monthlyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detection_monthly.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Detection_monthlyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Detection_monthly$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Detection_monthly$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detection_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detection_monthly model
   */
  interface Detection_monthlyFieldRefs {
    readonly id: FieldRef<"Detection_monthly", 'String'>
    readonly year: FieldRef<"Detection_monthly", 'Int'>
    readonly month: FieldRef<"Detection_monthly", 'Int'>
    readonly updatedAt: FieldRef<"Detection_monthly", 'DateTime'>
    readonly totalBaik: FieldRef<"Detection_monthly", 'Int'>
    readonly totalCacat: FieldRef<"Detection_monthly", 'Int'>
    readonly totalPanen: FieldRef<"Detection_monthly", 'Int'>
    readonly avgBaikPerSesi: FieldRef<"Detection_monthly", 'Float'>
    readonly avgCacatPerSesi: FieldRef<"Detection_monthly", 'Float'>
    readonly persenBaik: FieldRef<"Detection_monthly", 'Float'>
    readonly jumlahSesi: FieldRef<"Detection_monthly", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Detection_monthly findUnique
   */
  export type Detection_monthlyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * Filter, which Detection_monthly to fetch.
     */
    where: Detection_monthlyWhereUniqueInput
  }

  /**
   * Detection_monthly findUniqueOrThrow
   */
  export type Detection_monthlyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * Filter, which Detection_monthly to fetch.
     */
    where: Detection_monthlyWhereUniqueInput
  }

  /**
   * Detection_monthly findFirst
   */
  export type Detection_monthlyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * Filter, which Detection_monthly to fetch.
     */
    where?: Detection_monthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_monthlies to fetch.
     */
    orderBy?: Detection_monthlyOrderByWithRelationInput | Detection_monthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detection_monthlies.
     */
    cursor?: Detection_monthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_monthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_monthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detection_monthlies.
     */
    distinct?: Detection_monthlyScalarFieldEnum | Detection_monthlyScalarFieldEnum[]
  }

  /**
   * Detection_monthly findFirstOrThrow
   */
  export type Detection_monthlyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * Filter, which Detection_monthly to fetch.
     */
    where?: Detection_monthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_monthlies to fetch.
     */
    orderBy?: Detection_monthlyOrderByWithRelationInput | Detection_monthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detection_monthlies.
     */
    cursor?: Detection_monthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_monthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_monthlies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detection_monthlies.
     */
    distinct?: Detection_monthlyScalarFieldEnum | Detection_monthlyScalarFieldEnum[]
  }

  /**
   * Detection_monthly findMany
   */
  export type Detection_monthlyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * Filter, which Detection_monthlies to fetch.
     */
    where?: Detection_monthlyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detection_monthlies to fetch.
     */
    orderBy?: Detection_monthlyOrderByWithRelationInput | Detection_monthlyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detection_monthlies.
     */
    cursor?: Detection_monthlyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detection_monthlies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detection_monthlies.
     */
    skip?: number
    distinct?: Detection_monthlyScalarFieldEnum | Detection_monthlyScalarFieldEnum[]
  }

  /**
   * Detection_monthly create
   */
  export type Detection_monthlyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * The data needed to create a Detection_monthly.
     */
    data: XOR<Detection_monthlyCreateInput, Detection_monthlyUncheckedCreateInput>
  }

  /**
   * Detection_monthly createMany
   */
  export type Detection_monthlyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detection_monthlies.
     */
    data: Detection_monthlyCreateManyInput | Detection_monthlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detection_monthly createManyAndReturn
   */
  export type Detection_monthlyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * The data used to create many Detection_monthlies.
     */
    data: Detection_monthlyCreateManyInput | Detection_monthlyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detection_monthly update
   */
  export type Detection_monthlyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * The data needed to update a Detection_monthly.
     */
    data: XOR<Detection_monthlyUpdateInput, Detection_monthlyUncheckedUpdateInput>
    /**
     * Choose, which Detection_monthly to update.
     */
    where: Detection_monthlyWhereUniqueInput
  }

  /**
   * Detection_monthly updateMany
   */
  export type Detection_monthlyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detection_monthlies.
     */
    data: XOR<Detection_monthlyUpdateManyMutationInput, Detection_monthlyUncheckedUpdateManyInput>
    /**
     * Filter which Detection_monthlies to update
     */
    where?: Detection_monthlyWhereInput
    /**
     * Limit how many Detection_monthlies to update.
     */
    limit?: number
  }

  /**
   * Detection_monthly updateManyAndReturn
   */
  export type Detection_monthlyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * The data used to update Detection_monthlies.
     */
    data: XOR<Detection_monthlyUpdateManyMutationInput, Detection_monthlyUncheckedUpdateManyInput>
    /**
     * Filter which Detection_monthlies to update
     */
    where?: Detection_monthlyWhereInput
    /**
     * Limit how many Detection_monthlies to update.
     */
    limit?: number
  }

  /**
   * Detection_monthly upsert
   */
  export type Detection_monthlyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * The filter to search for the Detection_monthly to update in case it exists.
     */
    where: Detection_monthlyWhereUniqueInput
    /**
     * In case the Detection_monthly found by the `where` argument doesn't exist, create a new Detection_monthly with this data.
     */
    create: XOR<Detection_monthlyCreateInput, Detection_monthlyUncheckedCreateInput>
    /**
     * In case the Detection_monthly was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Detection_monthlyUpdateInput, Detection_monthlyUncheckedUpdateInput>
  }

  /**
   * Detection_monthly delete
   */
  export type Detection_monthlyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
    /**
     * Filter which Detection_monthly to delete.
     */
    where: Detection_monthlyWhereUniqueInput
  }

  /**
   * Detection_monthly deleteMany
   */
  export type Detection_monthlyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detection_monthlies to delete
     */
    where?: Detection_monthlyWhereInput
    /**
     * Limit how many Detection_monthlies to delete.
     */
    limit?: number
  }

  /**
   * Detection_monthly.sessions
   */
  export type Detection_monthly$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_sessions
     */
    select?: Detection_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_sessions
     */
    omit?: Detection_sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_sessionsInclude<ExtArgs> | null
    where?: Detection_sessionsWhereInput
    orderBy?: Detection_sessionsOrderByWithRelationInput | Detection_sessionsOrderByWithRelationInput[]
    cursor?: Detection_sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detection_sessionsScalarFieldEnum | Detection_sessionsScalarFieldEnum[]
  }

  /**
   * Detection_monthly without action
   */
  export type Detection_monthlyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detection_monthly
     */
    select?: Detection_monthlySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detection_monthly
     */
    omit?: Detection_monthlyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detection_monthlyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    phone: 'phone',
    email: 'email',
    address: 'address',
    birth: 'birth',
    isVerified: 'isVerified',
    verifyExpiredAt: 'verifyExpiredAt',
    verifyToken: 'verifyToken',
    createdAt: 'createdAt',
    role: 'role',
    imageProfile: 'imageProfile'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserDeviceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceCode: 'deviceCode',
    createdAt: 'createdAt'
  };

  export type UserDeviceScalarFieldEnum = (typeof UserDeviceScalarFieldEnum)[keyof typeof UserDeviceScalarFieldEnum]


  export const Detection_sessionsScalarFieldEnum: {
    id: 'id',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    totalBaik: 'totalBaik',
    totalCacat: 'totalCacat',
    monthSummaryId: 'monthSummaryId'
  };

  export type Detection_sessionsScalarFieldEnum = (typeof Detection_sessionsScalarFieldEnum)[keyof typeof Detection_sessionsScalarFieldEnum]


  export const Detection_recordsScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    baik: 'baik',
    cacat: 'cacat',
    totalBaik: 'totalBaik',
    totalCacat: 'totalCacat',
    sessionId: 'sessionId'
  };

  export type Detection_recordsScalarFieldEnum = (typeof Detection_recordsScalarFieldEnum)[keyof typeof Detection_recordsScalarFieldEnum]


  export const Detection_monthlyScalarFieldEnum: {
    id: 'id',
    year: 'year',
    month: 'month',
    updatedAt: 'updatedAt',
    totalBaik: 'totalBaik',
    totalCacat: 'totalCacat',
    totalPanen: 'totalPanen',
    avgBaikPerSesi: 'avgBaikPerSesi',
    avgCacatPerSesi: 'avgCacatPerSesi',
    persenBaik: 'persenBaik',
    jumlahSesi: 'jumlahSesi'
  };

  export type Detection_monthlyScalarFieldEnum = (typeof Detection_monthlyScalarFieldEnum)[keyof typeof Detection_monthlyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    birth?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    verifyExpiredAt?: DateTimeNullableFilter<"User"> | Date | string | null
    verifyToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    imageProfile?: StringNullableFilter<"User"> | string | null
    devices?: UserDeviceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    birth?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifyExpiredAt?: SortOrderInput | SortOrder
    verifyToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    imageProfile?: SortOrderInput | SortOrder
    devices?: UserDeviceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    birth?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    verifyExpiredAt?: DateTimeNullableFilter<"User"> | Date | string | null
    verifyToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    imageProfile?: StringNullableFilter<"User"> | string | null
    devices?: UserDeviceListRelationFilter
  }, "id" | "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    birth?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    verifyExpiredAt?: SortOrderInput | SortOrder
    verifyToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    imageProfile?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    birth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verifyExpiredAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    verifyToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    imageProfile?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserDeviceWhereInput = {
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    id?: StringFilter<"UserDevice"> | string
    userId?: StringFilter<"UserDevice"> | string
    deviceCode?: StringFilter<"UserDevice"> | string
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDeviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceCode?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_deviceCode?: UserDeviceUserIdDeviceCodeCompoundUniqueInput
    AND?: UserDeviceWhereInput | UserDeviceWhereInput[]
    OR?: UserDeviceWhereInput[]
    NOT?: UserDeviceWhereInput | UserDeviceWhereInput[]
    userId?: StringFilter<"UserDevice"> | string
    deviceCode?: StringFilter<"UserDevice"> | string
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_deviceCode">

  export type UserDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceCode?: SortOrder
    createdAt?: SortOrder
    _count?: UserDeviceCountOrderByAggregateInput
    _max?: UserDeviceMaxOrderByAggregateInput
    _min?: UserDeviceMinOrderByAggregateInput
  }

  export type UserDeviceScalarWhereWithAggregatesInput = {
    AND?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    OR?: UserDeviceScalarWhereWithAggregatesInput[]
    NOT?: UserDeviceScalarWhereWithAggregatesInput | UserDeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDevice"> | string
    userId?: StringWithAggregatesFilter<"UserDevice"> | string
    deviceCode?: StringWithAggregatesFilter<"UserDevice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserDevice"> | Date | string
  }

  export type Detection_sessionsWhereInput = {
    AND?: Detection_sessionsWhereInput | Detection_sessionsWhereInput[]
    OR?: Detection_sessionsWhereInput[]
    NOT?: Detection_sessionsWhereInput | Detection_sessionsWhereInput[]
    id?: StringFilter<"Detection_sessions"> | string
    startedAt?: DateTimeFilter<"Detection_sessions"> | Date | string
    endedAt?: DateTimeNullableFilter<"Detection_sessions"> | Date | string | null
    totalBaik?: IntFilter<"Detection_sessions"> | number
    totalCacat?: IntFilter<"Detection_sessions"> | number
    monthSummaryId?: StringNullableFilter<"Detection_sessions"> | string | null
    records?: Detection_recordsListRelationFilter
    monthSummary?: XOR<Detection_monthlyNullableScalarRelationFilter, Detection_monthlyWhereInput> | null
  }

  export type Detection_sessionsOrderByWithRelationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    monthSummaryId?: SortOrderInput | SortOrder
    records?: Detection_recordsOrderByRelationAggregateInput
    monthSummary?: Detection_monthlyOrderByWithRelationInput
  }

  export type Detection_sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Detection_sessionsWhereInput | Detection_sessionsWhereInput[]
    OR?: Detection_sessionsWhereInput[]
    NOT?: Detection_sessionsWhereInput | Detection_sessionsWhereInput[]
    startedAt?: DateTimeFilter<"Detection_sessions"> | Date | string
    endedAt?: DateTimeNullableFilter<"Detection_sessions"> | Date | string | null
    totalBaik?: IntFilter<"Detection_sessions"> | number
    totalCacat?: IntFilter<"Detection_sessions"> | number
    monthSummaryId?: StringNullableFilter<"Detection_sessions"> | string | null
    records?: Detection_recordsListRelationFilter
    monthSummary?: XOR<Detection_monthlyNullableScalarRelationFilter, Detection_monthlyWhereInput> | null
  }, "id">

  export type Detection_sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    monthSummaryId?: SortOrderInput | SortOrder
    _count?: Detection_sessionsCountOrderByAggregateInput
    _avg?: Detection_sessionsAvgOrderByAggregateInput
    _max?: Detection_sessionsMaxOrderByAggregateInput
    _min?: Detection_sessionsMinOrderByAggregateInput
    _sum?: Detection_sessionsSumOrderByAggregateInput
  }

  export type Detection_sessionsScalarWhereWithAggregatesInput = {
    AND?: Detection_sessionsScalarWhereWithAggregatesInput | Detection_sessionsScalarWhereWithAggregatesInput[]
    OR?: Detection_sessionsScalarWhereWithAggregatesInput[]
    NOT?: Detection_sessionsScalarWhereWithAggregatesInput | Detection_sessionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Detection_sessions"> | string
    startedAt?: DateTimeWithAggregatesFilter<"Detection_sessions"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"Detection_sessions"> | Date | string | null
    totalBaik?: IntWithAggregatesFilter<"Detection_sessions"> | number
    totalCacat?: IntWithAggregatesFilter<"Detection_sessions"> | number
    monthSummaryId?: StringNullableWithAggregatesFilter<"Detection_sessions"> | string | null
  }

  export type Detection_recordsWhereInput = {
    AND?: Detection_recordsWhereInput | Detection_recordsWhereInput[]
    OR?: Detection_recordsWhereInput[]
    NOT?: Detection_recordsWhereInput | Detection_recordsWhereInput[]
    id?: StringFilter<"Detection_records"> | string
    timestamp?: DateTimeFilter<"Detection_records"> | Date | string
    baik?: IntFilter<"Detection_records"> | number
    cacat?: IntFilter<"Detection_records"> | number
    totalBaik?: IntFilter<"Detection_records"> | number
    totalCacat?: IntFilter<"Detection_records"> | number
    sessionId?: StringFilter<"Detection_records"> | string
    session?: XOR<Detection_sessionsScalarRelationFilter, Detection_sessionsWhereInput>
  }

  export type Detection_recordsOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    baik?: SortOrder
    cacat?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    sessionId?: SortOrder
    session?: Detection_sessionsOrderByWithRelationInput
  }

  export type Detection_recordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Detection_recordsWhereInput | Detection_recordsWhereInput[]
    OR?: Detection_recordsWhereInput[]
    NOT?: Detection_recordsWhereInput | Detection_recordsWhereInput[]
    timestamp?: DateTimeFilter<"Detection_records"> | Date | string
    baik?: IntFilter<"Detection_records"> | number
    cacat?: IntFilter<"Detection_records"> | number
    totalBaik?: IntFilter<"Detection_records"> | number
    totalCacat?: IntFilter<"Detection_records"> | number
    sessionId?: StringFilter<"Detection_records"> | string
    session?: XOR<Detection_sessionsScalarRelationFilter, Detection_sessionsWhereInput>
  }, "id">

  export type Detection_recordsOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    baik?: SortOrder
    cacat?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    sessionId?: SortOrder
    _count?: Detection_recordsCountOrderByAggregateInput
    _avg?: Detection_recordsAvgOrderByAggregateInput
    _max?: Detection_recordsMaxOrderByAggregateInput
    _min?: Detection_recordsMinOrderByAggregateInput
    _sum?: Detection_recordsSumOrderByAggregateInput
  }

  export type Detection_recordsScalarWhereWithAggregatesInput = {
    AND?: Detection_recordsScalarWhereWithAggregatesInput | Detection_recordsScalarWhereWithAggregatesInput[]
    OR?: Detection_recordsScalarWhereWithAggregatesInput[]
    NOT?: Detection_recordsScalarWhereWithAggregatesInput | Detection_recordsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Detection_records"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Detection_records"> | Date | string
    baik?: IntWithAggregatesFilter<"Detection_records"> | number
    cacat?: IntWithAggregatesFilter<"Detection_records"> | number
    totalBaik?: IntWithAggregatesFilter<"Detection_records"> | number
    totalCacat?: IntWithAggregatesFilter<"Detection_records"> | number
    sessionId?: StringWithAggregatesFilter<"Detection_records"> | string
  }

  export type Detection_monthlyWhereInput = {
    AND?: Detection_monthlyWhereInput | Detection_monthlyWhereInput[]
    OR?: Detection_monthlyWhereInput[]
    NOT?: Detection_monthlyWhereInput | Detection_monthlyWhereInput[]
    id?: StringFilter<"Detection_monthly"> | string
    year?: IntFilter<"Detection_monthly"> | number
    month?: IntFilter<"Detection_monthly"> | number
    updatedAt?: DateTimeFilter<"Detection_monthly"> | Date | string
    totalBaik?: IntFilter<"Detection_monthly"> | number
    totalCacat?: IntFilter<"Detection_monthly"> | number
    totalPanen?: IntFilter<"Detection_monthly"> | number
    avgBaikPerSesi?: FloatFilter<"Detection_monthly"> | number
    avgCacatPerSesi?: FloatFilter<"Detection_monthly"> | number
    persenBaik?: FloatFilter<"Detection_monthly"> | number
    jumlahSesi?: IntFilter<"Detection_monthly"> | number
    sessions?: Detection_sessionsListRelationFilter
  }

  export type Detection_monthlyOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    updatedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    totalPanen?: SortOrder
    avgBaikPerSesi?: SortOrder
    avgCacatPerSesi?: SortOrder
    persenBaik?: SortOrder
    jumlahSesi?: SortOrder
    sessions?: Detection_sessionsOrderByRelationAggregateInput
  }

  export type Detection_monthlyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    year_month?: Detection_monthlyYearMonthCompoundUniqueInput
    AND?: Detection_monthlyWhereInput | Detection_monthlyWhereInput[]
    OR?: Detection_monthlyWhereInput[]
    NOT?: Detection_monthlyWhereInput | Detection_monthlyWhereInput[]
    year?: IntFilter<"Detection_monthly"> | number
    month?: IntFilter<"Detection_monthly"> | number
    updatedAt?: DateTimeFilter<"Detection_monthly"> | Date | string
    totalBaik?: IntFilter<"Detection_monthly"> | number
    totalCacat?: IntFilter<"Detection_monthly"> | number
    totalPanen?: IntFilter<"Detection_monthly"> | number
    avgBaikPerSesi?: FloatFilter<"Detection_monthly"> | number
    avgCacatPerSesi?: FloatFilter<"Detection_monthly"> | number
    persenBaik?: FloatFilter<"Detection_monthly"> | number
    jumlahSesi?: IntFilter<"Detection_monthly"> | number
    sessions?: Detection_sessionsListRelationFilter
  }, "id" | "year_month">

  export type Detection_monthlyOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    updatedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    totalPanen?: SortOrder
    avgBaikPerSesi?: SortOrder
    avgCacatPerSesi?: SortOrder
    persenBaik?: SortOrder
    jumlahSesi?: SortOrder
    _count?: Detection_monthlyCountOrderByAggregateInput
    _avg?: Detection_monthlyAvgOrderByAggregateInput
    _max?: Detection_monthlyMaxOrderByAggregateInput
    _min?: Detection_monthlyMinOrderByAggregateInput
    _sum?: Detection_monthlySumOrderByAggregateInput
  }

  export type Detection_monthlyScalarWhereWithAggregatesInput = {
    AND?: Detection_monthlyScalarWhereWithAggregatesInput | Detection_monthlyScalarWhereWithAggregatesInput[]
    OR?: Detection_monthlyScalarWhereWithAggregatesInput[]
    NOT?: Detection_monthlyScalarWhereWithAggregatesInput | Detection_monthlyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Detection_monthly"> | string
    year?: IntWithAggregatesFilter<"Detection_monthly"> | number
    month?: IntWithAggregatesFilter<"Detection_monthly"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Detection_monthly"> | Date | string
    totalBaik?: IntWithAggregatesFilter<"Detection_monthly"> | number
    totalCacat?: IntWithAggregatesFilter<"Detection_monthly"> | number
    totalPanen?: IntWithAggregatesFilter<"Detection_monthly"> | number
    avgBaikPerSesi?: FloatWithAggregatesFilter<"Detection_monthly"> | number
    avgCacatPerSesi?: FloatWithAggregatesFilter<"Detection_monthly"> | number
    persenBaik?: FloatWithAggregatesFilter<"Detection_monthly"> | number
    jumlahSesi?: IntWithAggregatesFilter<"Detection_monthly"> | number
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    phone: string
    email: string
    address: string
    birth?: Date | string | null
    isVerified?: boolean
    verifyExpiredAt?: Date | string | null
    verifyToken?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    imageProfile?: string | null
    devices?: UserDeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    phone: string
    email: string
    address: string
    birth?: Date | string | null
    isVerified?: boolean
    verifyExpiredAt?: Date | string | null
    verifyToken?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    imageProfile?: string | null
    devices?: UserDeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    imageProfile?: NullableStringFieldUpdateOperationsInput | string | null
    devices?: UserDeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    imageProfile?: NullableStringFieldUpdateOperationsInput | string | null
    devices?: UserDeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    phone: string
    email: string
    address: string
    birth?: Date | string | null
    isVerified?: boolean
    verifyExpiredAt?: Date | string | null
    verifyToken?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    imageProfile?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    imageProfile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    imageProfile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDeviceCreateInput = {
    id?: string
    deviceCode: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type UserDeviceUncheckedCreateInput = {
    id?: string
    userId: string
    deviceCode: string
    createdAt?: Date | string
  }

  export type UserDeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type UserDeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceCreateManyInput = {
    id?: string
    userId: string
    deviceCode: string
    createdAt?: Date | string
  }

  export type UserDeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    deviceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detection_sessionsCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
    records?: Detection_recordsCreateNestedManyWithoutSessionInput
    monthSummary?: Detection_monthlyCreateNestedOneWithoutSessionsInput
  }

  export type Detection_sessionsUncheckedCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
    monthSummaryId?: string | null
    records?: Detection_recordsUncheckedCreateNestedManyWithoutSessionInput
  }

  export type Detection_sessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    records?: Detection_recordsUpdateManyWithoutSessionNestedInput
    monthSummary?: Detection_monthlyUpdateOneWithoutSessionsNestedInput
  }

  export type Detection_sessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    monthSummaryId?: NullableStringFieldUpdateOperationsInput | string | null
    records?: Detection_recordsUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type Detection_sessionsCreateManyInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
    monthSummaryId?: string | null
  }

  export type Detection_sessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_sessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    monthSummaryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Detection_recordsCreateInput = {
    id?: string
    timestamp?: Date | string
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
    session: Detection_sessionsCreateNestedOneWithoutRecordsInput
  }

  export type Detection_recordsUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
    sessionId: string
  }

  export type Detection_recordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    baik?: IntFieldUpdateOperationsInput | number
    cacat?: IntFieldUpdateOperationsInput | number
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    session?: Detection_sessionsUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type Detection_recordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    baik?: IntFieldUpdateOperationsInput | number
    cacat?: IntFieldUpdateOperationsInput | number
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type Detection_recordsCreateManyInput = {
    id?: string
    timestamp?: Date | string
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
    sessionId: string
  }

  export type Detection_recordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    baik?: IntFieldUpdateOperationsInput | number
    cacat?: IntFieldUpdateOperationsInput | number
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_recordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    baik?: IntFieldUpdateOperationsInput | number
    cacat?: IntFieldUpdateOperationsInput | number
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type Detection_monthlyCreateInput = {
    id?: string
    year: number
    month: number
    updatedAt?: Date | string
    totalBaik?: number
    totalCacat?: number
    totalPanen?: number
    avgBaikPerSesi?: number
    avgCacatPerSesi?: number
    persenBaik?: number
    jumlahSesi?: number
    sessions?: Detection_sessionsCreateNestedManyWithoutMonthSummaryInput
  }

  export type Detection_monthlyUncheckedCreateInput = {
    id?: string
    year: number
    month: number
    updatedAt?: Date | string
    totalBaik?: number
    totalCacat?: number
    totalPanen?: number
    avgBaikPerSesi?: number
    avgCacatPerSesi?: number
    persenBaik?: number
    jumlahSesi?: number
    sessions?: Detection_sessionsUncheckedCreateNestedManyWithoutMonthSummaryInput
  }

  export type Detection_monthlyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    totalPanen?: IntFieldUpdateOperationsInput | number
    avgBaikPerSesi?: FloatFieldUpdateOperationsInput | number
    avgCacatPerSesi?: FloatFieldUpdateOperationsInput | number
    persenBaik?: FloatFieldUpdateOperationsInput | number
    jumlahSesi?: IntFieldUpdateOperationsInput | number
    sessions?: Detection_sessionsUpdateManyWithoutMonthSummaryNestedInput
  }

  export type Detection_monthlyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    totalPanen?: IntFieldUpdateOperationsInput | number
    avgBaikPerSesi?: FloatFieldUpdateOperationsInput | number
    avgCacatPerSesi?: FloatFieldUpdateOperationsInput | number
    persenBaik?: FloatFieldUpdateOperationsInput | number
    jumlahSesi?: IntFieldUpdateOperationsInput | number
    sessions?: Detection_sessionsUncheckedUpdateManyWithoutMonthSummaryNestedInput
  }

  export type Detection_monthlyCreateManyInput = {
    id?: string
    year: number
    month: number
    updatedAt?: Date | string
    totalBaik?: number
    totalCacat?: number
    totalPanen?: number
    avgBaikPerSesi?: number
    avgCacatPerSesi?: number
    persenBaik?: number
    jumlahSesi?: number
  }

  export type Detection_monthlyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    totalPanen?: IntFieldUpdateOperationsInput | number
    avgBaikPerSesi?: FloatFieldUpdateOperationsInput | number
    avgCacatPerSesi?: FloatFieldUpdateOperationsInput | number
    persenBaik?: FloatFieldUpdateOperationsInput | number
    jumlahSesi?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_monthlyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    totalPanen?: IntFieldUpdateOperationsInput | number
    avgBaikPerSesi?: FloatFieldUpdateOperationsInput | number
    avgCacatPerSesi?: FloatFieldUpdateOperationsInput | number
    persenBaik?: FloatFieldUpdateOperationsInput | number
    jumlahSesi?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserDeviceListRelationFilter = {
    every?: UserDeviceWhereInput
    some?: UserDeviceWhereInput
    none?: UserDeviceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    isVerified?: SortOrder
    verifyExpiredAt?: SortOrder
    verifyToken?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    imageProfile?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    isVerified?: SortOrder
    verifyExpiredAt?: SortOrder
    verifyToken?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    imageProfile?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    isVerified?: SortOrder
    verifyExpiredAt?: SortOrder
    verifyToken?: SortOrder
    createdAt?: SortOrder
    role?: SortOrder
    imageProfile?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserDeviceUserIdDeviceCodeCompoundUniqueInput = {
    userId: string
    deviceCode: string
  }

  export type UserDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceCode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceCode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceCode?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Detection_recordsListRelationFilter = {
    every?: Detection_recordsWhereInput
    some?: Detection_recordsWhereInput
    none?: Detection_recordsWhereInput
  }

  export type Detection_monthlyNullableScalarRelationFilter = {
    is?: Detection_monthlyWhereInput | null
    isNot?: Detection_monthlyWhereInput | null
  }

  export type Detection_recordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Detection_sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    monthSummaryId?: SortOrder
  }

  export type Detection_sessionsAvgOrderByAggregateInput = {
    totalBaik?: SortOrder
    totalCacat?: SortOrder
  }

  export type Detection_sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    monthSummaryId?: SortOrder
  }

  export type Detection_sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    monthSummaryId?: SortOrder
  }

  export type Detection_sessionsSumOrderByAggregateInput = {
    totalBaik?: SortOrder
    totalCacat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Detection_sessionsScalarRelationFilter = {
    is?: Detection_sessionsWhereInput
    isNot?: Detection_sessionsWhereInput
  }

  export type Detection_recordsCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    baik?: SortOrder
    cacat?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    sessionId?: SortOrder
  }

  export type Detection_recordsAvgOrderByAggregateInput = {
    baik?: SortOrder
    cacat?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
  }

  export type Detection_recordsMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    baik?: SortOrder
    cacat?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    sessionId?: SortOrder
  }

  export type Detection_recordsMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    baik?: SortOrder
    cacat?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    sessionId?: SortOrder
  }

  export type Detection_recordsSumOrderByAggregateInput = {
    baik?: SortOrder
    cacat?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Detection_sessionsListRelationFilter = {
    every?: Detection_sessionsWhereInput
    some?: Detection_sessionsWhereInput
    none?: Detection_sessionsWhereInput
  }

  export type Detection_sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Detection_monthlyYearMonthCompoundUniqueInput = {
    year: number
    month: number
  }

  export type Detection_monthlyCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    updatedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    totalPanen?: SortOrder
    avgBaikPerSesi?: SortOrder
    avgCacatPerSesi?: SortOrder
    persenBaik?: SortOrder
    jumlahSesi?: SortOrder
  }

  export type Detection_monthlyAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    totalPanen?: SortOrder
    avgBaikPerSesi?: SortOrder
    avgCacatPerSesi?: SortOrder
    persenBaik?: SortOrder
    jumlahSesi?: SortOrder
  }

  export type Detection_monthlyMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    updatedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    totalPanen?: SortOrder
    avgBaikPerSesi?: SortOrder
    avgCacatPerSesi?: SortOrder
    persenBaik?: SortOrder
    jumlahSesi?: SortOrder
  }

  export type Detection_monthlyMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    updatedAt?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    totalPanen?: SortOrder
    avgBaikPerSesi?: SortOrder
    avgCacatPerSesi?: SortOrder
    persenBaik?: SortOrder
    jumlahSesi?: SortOrder
  }

  export type Detection_monthlySumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    totalBaik?: SortOrder
    totalCacat?: SortOrder
    totalPanen?: SortOrder
    avgBaikPerSesi?: SortOrder
    avgCacatPerSesi?: SortOrder
    persenBaik?: SortOrder
    jumlahSesi?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserDeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type UserDeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserDeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput> | UserDeviceCreateWithoutUserInput[] | UserDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDeviceCreateOrConnectWithoutUserInput | UserDeviceCreateOrConnectWithoutUserInput[]
    upsert?: UserDeviceUpsertWithWhereUniqueWithoutUserInput | UserDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDeviceCreateManyUserInputEnvelope
    set?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    disconnect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    delete?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    connect?: UserDeviceWhereUniqueInput | UserDeviceWhereUniqueInput[]
    update?: UserDeviceUpdateWithWhereUniqueWithoutUserInput | UserDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDeviceUpdateManyWithWhereWithoutUserInput | UserDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type Detection_recordsCreateNestedManyWithoutSessionInput = {
    create?: XOR<Detection_recordsCreateWithoutSessionInput, Detection_recordsUncheckedCreateWithoutSessionInput> | Detection_recordsCreateWithoutSessionInput[] | Detection_recordsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Detection_recordsCreateOrConnectWithoutSessionInput | Detection_recordsCreateOrConnectWithoutSessionInput[]
    createMany?: Detection_recordsCreateManySessionInputEnvelope
    connect?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
  }

  export type Detection_monthlyCreateNestedOneWithoutSessionsInput = {
    create?: XOR<Detection_monthlyCreateWithoutSessionsInput, Detection_monthlyUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: Detection_monthlyCreateOrConnectWithoutSessionsInput
    connect?: Detection_monthlyWhereUniqueInput
  }

  export type Detection_recordsUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<Detection_recordsCreateWithoutSessionInput, Detection_recordsUncheckedCreateWithoutSessionInput> | Detection_recordsCreateWithoutSessionInput[] | Detection_recordsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Detection_recordsCreateOrConnectWithoutSessionInput | Detection_recordsCreateOrConnectWithoutSessionInput[]
    createMany?: Detection_recordsCreateManySessionInputEnvelope
    connect?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Detection_recordsUpdateManyWithoutSessionNestedInput = {
    create?: XOR<Detection_recordsCreateWithoutSessionInput, Detection_recordsUncheckedCreateWithoutSessionInput> | Detection_recordsCreateWithoutSessionInput[] | Detection_recordsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Detection_recordsCreateOrConnectWithoutSessionInput | Detection_recordsCreateOrConnectWithoutSessionInput[]
    upsert?: Detection_recordsUpsertWithWhereUniqueWithoutSessionInput | Detection_recordsUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: Detection_recordsCreateManySessionInputEnvelope
    set?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    disconnect?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    delete?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    connect?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    update?: Detection_recordsUpdateWithWhereUniqueWithoutSessionInput | Detection_recordsUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: Detection_recordsUpdateManyWithWhereWithoutSessionInput | Detection_recordsUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: Detection_recordsScalarWhereInput | Detection_recordsScalarWhereInput[]
  }

  export type Detection_monthlyUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<Detection_monthlyCreateWithoutSessionsInput, Detection_monthlyUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: Detection_monthlyCreateOrConnectWithoutSessionsInput
    upsert?: Detection_monthlyUpsertWithoutSessionsInput
    disconnect?: Detection_monthlyWhereInput | boolean
    delete?: Detection_monthlyWhereInput | boolean
    connect?: Detection_monthlyWhereUniqueInput
    update?: XOR<XOR<Detection_monthlyUpdateToOneWithWhereWithoutSessionsInput, Detection_monthlyUpdateWithoutSessionsInput>, Detection_monthlyUncheckedUpdateWithoutSessionsInput>
  }

  export type Detection_recordsUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<Detection_recordsCreateWithoutSessionInput, Detection_recordsUncheckedCreateWithoutSessionInput> | Detection_recordsCreateWithoutSessionInput[] | Detection_recordsUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Detection_recordsCreateOrConnectWithoutSessionInput | Detection_recordsCreateOrConnectWithoutSessionInput[]
    upsert?: Detection_recordsUpsertWithWhereUniqueWithoutSessionInput | Detection_recordsUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: Detection_recordsCreateManySessionInputEnvelope
    set?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    disconnect?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    delete?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    connect?: Detection_recordsWhereUniqueInput | Detection_recordsWhereUniqueInput[]
    update?: Detection_recordsUpdateWithWhereUniqueWithoutSessionInput | Detection_recordsUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: Detection_recordsUpdateManyWithWhereWithoutSessionInput | Detection_recordsUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: Detection_recordsScalarWhereInput | Detection_recordsScalarWhereInput[]
  }

  export type Detection_sessionsCreateNestedOneWithoutRecordsInput = {
    create?: XOR<Detection_sessionsCreateWithoutRecordsInput, Detection_sessionsUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: Detection_sessionsCreateOrConnectWithoutRecordsInput
    connect?: Detection_sessionsWhereUniqueInput
  }

  export type Detection_sessionsUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<Detection_sessionsCreateWithoutRecordsInput, Detection_sessionsUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: Detection_sessionsCreateOrConnectWithoutRecordsInput
    upsert?: Detection_sessionsUpsertWithoutRecordsInput
    connect?: Detection_sessionsWhereUniqueInput
    update?: XOR<XOR<Detection_sessionsUpdateToOneWithWhereWithoutRecordsInput, Detection_sessionsUpdateWithoutRecordsInput>, Detection_sessionsUncheckedUpdateWithoutRecordsInput>
  }

  export type Detection_sessionsCreateNestedManyWithoutMonthSummaryInput = {
    create?: XOR<Detection_sessionsCreateWithoutMonthSummaryInput, Detection_sessionsUncheckedCreateWithoutMonthSummaryInput> | Detection_sessionsCreateWithoutMonthSummaryInput[] | Detection_sessionsUncheckedCreateWithoutMonthSummaryInput[]
    connectOrCreate?: Detection_sessionsCreateOrConnectWithoutMonthSummaryInput | Detection_sessionsCreateOrConnectWithoutMonthSummaryInput[]
    createMany?: Detection_sessionsCreateManyMonthSummaryInputEnvelope
    connect?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
  }

  export type Detection_sessionsUncheckedCreateNestedManyWithoutMonthSummaryInput = {
    create?: XOR<Detection_sessionsCreateWithoutMonthSummaryInput, Detection_sessionsUncheckedCreateWithoutMonthSummaryInput> | Detection_sessionsCreateWithoutMonthSummaryInput[] | Detection_sessionsUncheckedCreateWithoutMonthSummaryInput[]
    connectOrCreate?: Detection_sessionsCreateOrConnectWithoutMonthSummaryInput | Detection_sessionsCreateOrConnectWithoutMonthSummaryInput[]
    createMany?: Detection_sessionsCreateManyMonthSummaryInputEnvelope
    connect?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Detection_sessionsUpdateManyWithoutMonthSummaryNestedInput = {
    create?: XOR<Detection_sessionsCreateWithoutMonthSummaryInput, Detection_sessionsUncheckedCreateWithoutMonthSummaryInput> | Detection_sessionsCreateWithoutMonthSummaryInput[] | Detection_sessionsUncheckedCreateWithoutMonthSummaryInput[]
    connectOrCreate?: Detection_sessionsCreateOrConnectWithoutMonthSummaryInput | Detection_sessionsCreateOrConnectWithoutMonthSummaryInput[]
    upsert?: Detection_sessionsUpsertWithWhereUniqueWithoutMonthSummaryInput | Detection_sessionsUpsertWithWhereUniqueWithoutMonthSummaryInput[]
    createMany?: Detection_sessionsCreateManyMonthSummaryInputEnvelope
    set?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    disconnect?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    delete?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    connect?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    update?: Detection_sessionsUpdateWithWhereUniqueWithoutMonthSummaryInput | Detection_sessionsUpdateWithWhereUniqueWithoutMonthSummaryInput[]
    updateMany?: Detection_sessionsUpdateManyWithWhereWithoutMonthSummaryInput | Detection_sessionsUpdateManyWithWhereWithoutMonthSummaryInput[]
    deleteMany?: Detection_sessionsScalarWhereInput | Detection_sessionsScalarWhereInput[]
  }

  export type Detection_sessionsUncheckedUpdateManyWithoutMonthSummaryNestedInput = {
    create?: XOR<Detection_sessionsCreateWithoutMonthSummaryInput, Detection_sessionsUncheckedCreateWithoutMonthSummaryInput> | Detection_sessionsCreateWithoutMonthSummaryInput[] | Detection_sessionsUncheckedCreateWithoutMonthSummaryInput[]
    connectOrCreate?: Detection_sessionsCreateOrConnectWithoutMonthSummaryInput | Detection_sessionsCreateOrConnectWithoutMonthSummaryInput[]
    upsert?: Detection_sessionsUpsertWithWhereUniqueWithoutMonthSummaryInput | Detection_sessionsUpsertWithWhereUniqueWithoutMonthSummaryInput[]
    createMany?: Detection_sessionsCreateManyMonthSummaryInputEnvelope
    set?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    disconnect?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    delete?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    connect?: Detection_sessionsWhereUniqueInput | Detection_sessionsWhereUniqueInput[]
    update?: Detection_sessionsUpdateWithWhereUniqueWithoutMonthSummaryInput | Detection_sessionsUpdateWithWhereUniqueWithoutMonthSummaryInput[]
    updateMany?: Detection_sessionsUpdateManyWithWhereWithoutMonthSummaryInput | Detection_sessionsUpdateManyWithWhereWithoutMonthSummaryInput[]
    deleteMany?: Detection_sessionsScalarWhereInput | Detection_sessionsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserDeviceCreateWithoutUserInput = {
    id?: string
    deviceCode: string
    createdAt?: Date | string
  }

  export type UserDeviceUncheckedCreateWithoutUserInput = {
    id?: string
    deviceCode: string
    createdAt?: Date | string
  }

  export type UserDeviceCreateOrConnectWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceCreateManyUserInputEnvelope = {
    data: UserDeviceCreateManyUserInput | UserDeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    update: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
    create: XOR<UserDeviceCreateWithoutUserInput, UserDeviceUncheckedCreateWithoutUserInput>
  }

  export type UserDeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDeviceWhereUniqueInput
    data: XOR<UserDeviceUpdateWithoutUserInput, UserDeviceUncheckedUpdateWithoutUserInput>
  }

  export type UserDeviceUpdateManyWithWhereWithoutUserInput = {
    where: UserDeviceScalarWhereInput
    data: XOR<UserDeviceUpdateManyMutationInput, UserDeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDeviceScalarWhereInput = {
    AND?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    OR?: UserDeviceScalarWhereInput[]
    NOT?: UserDeviceScalarWhereInput | UserDeviceScalarWhereInput[]
    id?: StringFilter<"UserDevice"> | string
    userId?: StringFilter<"UserDevice"> | string
    deviceCode?: StringFilter<"UserDevice"> | string
    createdAt?: DateTimeFilter<"UserDevice"> | Date | string
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    username: string
    password: string
    phone: string
    email: string
    address: string
    birth?: Date | string | null
    isVerified?: boolean
    verifyExpiredAt?: Date | string | null
    verifyToken?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    imageProfile?: string | null
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    username: string
    password: string
    phone: string
    email: string
    address: string
    birth?: Date | string | null
    isVerified?: boolean
    verifyExpiredAt?: Date | string | null
    verifyToken?: string | null
    createdAt?: Date | string
    role?: $Enums.Role
    imageProfile?: string | null
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    imageProfile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verifyExpiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    imageProfile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Detection_recordsCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
  }

  export type Detection_recordsUncheckedCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
  }

  export type Detection_recordsCreateOrConnectWithoutSessionInput = {
    where: Detection_recordsWhereUniqueInput
    create: XOR<Detection_recordsCreateWithoutSessionInput, Detection_recordsUncheckedCreateWithoutSessionInput>
  }

  export type Detection_recordsCreateManySessionInputEnvelope = {
    data: Detection_recordsCreateManySessionInput | Detection_recordsCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type Detection_monthlyCreateWithoutSessionsInput = {
    id?: string
    year: number
    month: number
    updatedAt?: Date | string
    totalBaik?: number
    totalCacat?: number
    totalPanen?: number
    avgBaikPerSesi?: number
    avgCacatPerSesi?: number
    persenBaik?: number
    jumlahSesi?: number
  }

  export type Detection_monthlyUncheckedCreateWithoutSessionsInput = {
    id?: string
    year: number
    month: number
    updatedAt?: Date | string
    totalBaik?: number
    totalCacat?: number
    totalPanen?: number
    avgBaikPerSesi?: number
    avgCacatPerSesi?: number
    persenBaik?: number
    jumlahSesi?: number
  }

  export type Detection_monthlyCreateOrConnectWithoutSessionsInput = {
    where: Detection_monthlyWhereUniqueInput
    create: XOR<Detection_monthlyCreateWithoutSessionsInput, Detection_monthlyUncheckedCreateWithoutSessionsInput>
  }

  export type Detection_recordsUpsertWithWhereUniqueWithoutSessionInput = {
    where: Detection_recordsWhereUniqueInput
    update: XOR<Detection_recordsUpdateWithoutSessionInput, Detection_recordsUncheckedUpdateWithoutSessionInput>
    create: XOR<Detection_recordsCreateWithoutSessionInput, Detection_recordsUncheckedCreateWithoutSessionInput>
  }

  export type Detection_recordsUpdateWithWhereUniqueWithoutSessionInput = {
    where: Detection_recordsWhereUniqueInput
    data: XOR<Detection_recordsUpdateWithoutSessionInput, Detection_recordsUncheckedUpdateWithoutSessionInput>
  }

  export type Detection_recordsUpdateManyWithWhereWithoutSessionInput = {
    where: Detection_recordsScalarWhereInput
    data: XOR<Detection_recordsUpdateManyMutationInput, Detection_recordsUncheckedUpdateManyWithoutSessionInput>
  }

  export type Detection_recordsScalarWhereInput = {
    AND?: Detection_recordsScalarWhereInput | Detection_recordsScalarWhereInput[]
    OR?: Detection_recordsScalarWhereInput[]
    NOT?: Detection_recordsScalarWhereInput | Detection_recordsScalarWhereInput[]
    id?: StringFilter<"Detection_records"> | string
    timestamp?: DateTimeFilter<"Detection_records"> | Date | string
    baik?: IntFilter<"Detection_records"> | number
    cacat?: IntFilter<"Detection_records"> | number
    totalBaik?: IntFilter<"Detection_records"> | number
    totalCacat?: IntFilter<"Detection_records"> | number
    sessionId?: StringFilter<"Detection_records"> | string
  }

  export type Detection_monthlyUpsertWithoutSessionsInput = {
    update: XOR<Detection_monthlyUpdateWithoutSessionsInput, Detection_monthlyUncheckedUpdateWithoutSessionsInput>
    create: XOR<Detection_monthlyCreateWithoutSessionsInput, Detection_monthlyUncheckedCreateWithoutSessionsInput>
    where?: Detection_monthlyWhereInput
  }

  export type Detection_monthlyUpdateToOneWithWhereWithoutSessionsInput = {
    where?: Detection_monthlyWhereInput
    data: XOR<Detection_monthlyUpdateWithoutSessionsInput, Detection_monthlyUncheckedUpdateWithoutSessionsInput>
  }

  export type Detection_monthlyUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    totalPanen?: IntFieldUpdateOperationsInput | number
    avgBaikPerSesi?: FloatFieldUpdateOperationsInput | number
    avgCacatPerSesi?: FloatFieldUpdateOperationsInput | number
    persenBaik?: FloatFieldUpdateOperationsInput | number
    jumlahSesi?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_monthlyUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    totalPanen?: IntFieldUpdateOperationsInput | number
    avgBaikPerSesi?: FloatFieldUpdateOperationsInput | number
    avgCacatPerSesi?: FloatFieldUpdateOperationsInput | number
    persenBaik?: FloatFieldUpdateOperationsInput | number
    jumlahSesi?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_sessionsCreateWithoutRecordsInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
    monthSummary?: Detection_monthlyCreateNestedOneWithoutSessionsInput
  }

  export type Detection_sessionsUncheckedCreateWithoutRecordsInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
    monthSummaryId?: string | null
  }

  export type Detection_sessionsCreateOrConnectWithoutRecordsInput = {
    where: Detection_sessionsWhereUniqueInput
    create: XOR<Detection_sessionsCreateWithoutRecordsInput, Detection_sessionsUncheckedCreateWithoutRecordsInput>
  }

  export type Detection_sessionsUpsertWithoutRecordsInput = {
    update: XOR<Detection_sessionsUpdateWithoutRecordsInput, Detection_sessionsUncheckedUpdateWithoutRecordsInput>
    create: XOR<Detection_sessionsCreateWithoutRecordsInput, Detection_sessionsUncheckedCreateWithoutRecordsInput>
    where?: Detection_sessionsWhereInput
  }

  export type Detection_sessionsUpdateToOneWithWhereWithoutRecordsInput = {
    where?: Detection_sessionsWhereInput
    data: XOR<Detection_sessionsUpdateWithoutRecordsInput, Detection_sessionsUncheckedUpdateWithoutRecordsInput>
  }

  export type Detection_sessionsUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    monthSummary?: Detection_monthlyUpdateOneWithoutSessionsNestedInput
  }

  export type Detection_sessionsUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    monthSummaryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Detection_sessionsCreateWithoutMonthSummaryInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
    records?: Detection_recordsCreateNestedManyWithoutSessionInput
  }

  export type Detection_sessionsUncheckedCreateWithoutMonthSummaryInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
    records?: Detection_recordsUncheckedCreateNestedManyWithoutSessionInput
  }

  export type Detection_sessionsCreateOrConnectWithoutMonthSummaryInput = {
    where: Detection_sessionsWhereUniqueInput
    create: XOR<Detection_sessionsCreateWithoutMonthSummaryInput, Detection_sessionsUncheckedCreateWithoutMonthSummaryInput>
  }

  export type Detection_sessionsCreateManyMonthSummaryInputEnvelope = {
    data: Detection_sessionsCreateManyMonthSummaryInput | Detection_sessionsCreateManyMonthSummaryInput[]
    skipDuplicates?: boolean
  }

  export type Detection_sessionsUpsertWithWhereUniqueWithoutMonthSummaryInput = {
    where: Detection_sessionsWhereUniqueInput
    update: XOR<Detection_sessionsUpdateWithoutMonthSummaryInput, Detection_sessionsUncheckedUpdateWithoutMonthSummaryInput>
    create: XOR<Detection_sessionsCreateWithoutMonthSummaryInput, Detection_sessionsUncheckedCreateWithoutMonthSummaryInput>
  }

  export type Detection_sessionsUpdateWithWhereUniqueWithoutMonthSummaryInput = {
    where: Detection_sessionsWhereUniqueInput
    data: XOR<Detection_sessionsUpdateWithoutMonthSummaryInput, Detection_sessionsUncheckedUpdateWithoutMonthSummaryInput>
  }

  export type Detection_sessionsUpdateManyWithWhereWithoutMonthSummaryInput = {
    where: Detection_sessionsScalarWhereInput
    data: XOR<Detection_sessionsUpdateManyMutationInput, Detection_sessionsUncheckedUpdateManyWithoutMonthSummaryInput>
  }

  export type Detection_sessionsScalarWhereInput = {
    AND?: Detection_sessionsScalarWhereInput | Detection_sessionsScalarWhereInput[]
    OR?: Detection_sessionsScalarWhereInput[]
    NOT?: Detection_sessionsScalarWhereInput | Detection_sessionsScalarWhereInput[]
    id?: StringFilter<"Detection_sessions"> | string
    startedAt?: DateTimeFilter<"Detection_sessions"> | Date | string
    endedAt?: DateTimeNullableFilter<"Detection_sessions"> | Date | string | null
    totalBaik?: IntFilter<"Detection_sessions"> | number
    totalCacat?: IntFilter<"Detection_sessions"> | number
    monthSummaryId?: StringNullableFilter<"Detection_sessions"> | string | null
  }

  export type UserDeviceCreateManyUserInput = {
    id?: string
    deviceCode: string
    createdAt?: Date | string
  }

  export type UserDeviceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDeviceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detection_recordsCreateManySessionInput = {
    id?: string
    timestamp?: Date | string
    baik: number
    cacat: number
    totalBaik: number
    totalCacat: number
  }

  export type Detection_recordsUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    baik?: IntFieldUpdateOperationsInput | number
    cacat?: IntFieldUpdateOperationsInput | number
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_recordsUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    baik?: IntFieldUpdateOperationsInput | number
    cacat?: IntFieldUpdateOperationsInput | number
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_recordsUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    baik?: IntFieldUpdateOperationsInput | number
    cacat?: IntFieldUpdateOperationsInput | number
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
  }

  export type Detection_sessionsCreateManyMonthSummaryInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    totalBaik?: number
    totalCacat?: number
  }

  export type Detection_sessionsUpdateWithoutMonthSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    records?: Detection_recordsUpdateManyWithoutSessionNestedInput
  }

  export type Detection_sessionsUncheckedUpdateWithoutMonthSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
    records?: Detection_recordsUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type Detection_sessionsUncheckedUpdateManyWithoutMonthSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalBaik?: IntFieldUpdateOperationsInput | number
    totalCacat?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}