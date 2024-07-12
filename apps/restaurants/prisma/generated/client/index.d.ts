
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Avatars
 * 
 */
export type Avatars = $Result.DefaultSelection<Prisma.$AvatarsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Foods
 * 
 */
export type Foods = $Result.DefaultSelection<Prisma.$FoodsPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  Admin: 'Admin',
  User: 'User'
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
 * // Fetch zero or more Avatars
 * const avatars = await prisma.avatars.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Avatars
   * const avatars = await prisma.avatars.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.avatars`: Exposes CRUD operations for the **Avatars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatars.findMany()
    * ```
    */
  get avatars(): Prisma.AvatarsDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs>;

  /**
   * `prisma.foods`: Exposes CRUD operations for the **Foods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.foods.findMany()
    * ```
    */
  get foods(): Prisma.FoodsDelegate<ExtArgs>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Avatars: 'Avatars',
    User: 'User',
    Reviews: 'Reviews',
    Foods: 'Foods',
    Restaurant: 'Restaurant',
    Images: 'Images'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "avatars" | "user" | "reviews" | "foods" | "restaurant" | "images"
      txIsolationLevel: never
    }
    model: {
      Avatars: {
        payload: Prisma.$AvatarsPayload<ExtArgs>
        fields: Prisma.AvatarsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload>
          }
          findFirst: {
            args: Prisma.AvatarsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload>
          }
          findMany: {
            args: Prisma.AvatarsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload>[]
          }
          create: {
            args: Prisma.AvatarsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload>
          }
          createMany: {
            args: Prisma.AvatarsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvatarsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload>
          }
          update: {
            args: Prisma.AvatarsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload>
          }
          deleteMany: {
            args: Prisma.AvatarsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvatarsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarsPayload>
          }
          aggregate: {
            args: Prisma.AvatarsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatars>
          }
          groupBy: {
            args: Prisma.AvatarsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AvatarsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AvatarsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AvatarsCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarsCountAggregateOutputType> | number
          }
        }
      }
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReviewsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReviewsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Foods: {
        payload: Prisma.$FoodsPayload<ExtArgs>
        fields: Prisma.FoodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findFirst: {
            args: Prisma.FoodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findMany: {
            args: Prisma.FoodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>[]
          }
          create: {
            args: Prisma.FoodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          createMany: {
            args: Prisma.FoodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          update: {
            args: Prisma.FoodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          deleteMany: {
            args: Prisma.FoodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          aggregate: {
            args: Prisma.FoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoods>
          }
          groupBy: {
            args: Prisma.FoodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FoodsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FoodsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FoodsCountArgs<ExtArgs>
            result: $Utils.Optional<FoodsCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RestaurantFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RestaurantAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ImagesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ImagesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
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
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type FoodsCountOutputType
   */

  export type FoodsCountOutputType = {
    images: number
    Reviews: number
  }

  export type FoodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | FoodsCountOutputTypeCountImagesArgs
    Reviews?: boolean | FoodsCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodsCountOutputType
     */
    select?: FoodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    Foods: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Foods?: boolean | RestaurantCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Avatars
   */

  export type AggregateAvatars = {
    _count: AvatarsCountAggregateOutputType | null
    _min: AvatarsMinAggregateOutputType | null
    _max: AvatarsMaxAggregateOutputType | null
  }

  export type AvatarsMinAggregateOutputType = {
    id: string | null
    public_id: string | null
    url: string | null
    userId: string | null
  }

  export type AvatarsMaxAggregateOutputType = {
    id: string | null
    public_id: string | null
    url: string | null
    userId: string | null
  }

  export type AvatarsCountAggregateOutputType = {
    id: number
    public_id: number
    url: number
    userId: number
    _all: number
  }


  export type AvatarsMinAggregateInputType = {
    id?: true
    public_id?: true
    url?: true
    userId?: true
  }

  export type AvatarsMaxAggregateInputType = {
    id?: true
    public_id?: true
    url?: true
    userId?: true
  }

  export type AvatarsCountAggregateInputType = {
    id?: true
    public_id?: true
    url?: true
    userId?: true
    _all?: true
  }

  export type AvatarsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to aggregate.
     */
    where?: AvatarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarsOrderByWithRelationInput | AvatarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarsMaxAggregateInputType
  }

  export type GetAvatarsAggregateType<T extends AvatarsAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatars[P]>
      : GetScalarType<T[P], AggregateAvatars[P]>
  }




  export type AvatarsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarsWhereInput
    orderBy?: AvatarsOrderByWithAggregationInput | AvatarsOrderByWithAggregationInput[]
    by: AvatarsScalarFieldEnum[] | AvatarsScalarFieldEnum
    having?: AvatarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarsCountAggregateInputType | true
    _min?: AvatarsMinAggregateInputType
    _max?: AvatarsMaxAggregateInputType
  }

  export type AvatarsGroupByOutputType = {
    id: string
    public_id: string
    url: string
    userId: string
    _count: AvatarsCountAggregateOutputType | null
    _min: AvatarsMinAggregateOutputType | null
    _max: AvatarsMaxAggregateOutputType | null
  }

  type GetAvatarsGroupByPayload<T extends AvatarsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarsGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarsGroupByOutputType[P]>
        }
      >
    >


  export type AvatarsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_id?: boolean
    url?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatars"]>


  export type AvatarsSelectScalar = {
    id?: boolean
    public_id?: boolean
    url?: boolean
    userId?: boolean
  }

  export type AvatarsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvatarsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatars"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      public_id: string
      url: string
      userId: string
    }, ExtArgs["result"]["avatars"]>
    composites: {}
  }

  type AvatarsGetPayload<S extends boolean | null | undefined | AvatarsDefaultArgs> = $Result.GetResult<Prisma.$AvatarsPayload, S>

  type AvatarsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvatarsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvatarsCountAggregateInputType | true
    }

  export interface AvatarsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatars'], meta: { name: 'Avatars' } }
    /**
     * Find zero or one Avatars that matches the filter.
     * @param {AvatarsFindUniqueArgs} args - Arguments to find a Avatars
     * @example
     * // Get one Avatars
     * const avatars = await prisma.avatars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarsFindUniqueArgs>(args: SelectSubset<T, AvatarsFindUniqueArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Avatars that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AvatarsFindUniqueOrThrowArgs} args - Arguments to find a Avatars
     * @example
     * // Get one Avatars
     * const avatars = await prisma.avatars.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarsFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarsFindFirstArgs} args - Arguments to find a Avatars
     * @example
     * // Get one Avatars
     * const avatars = await prisma.avatars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarsFindFirstArgs>(args?: SelectSubset<T, AvatarsFindFirstArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Avatars that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarsFindFirstOrThrowArgs} args - Arguments to find a Avatars
     * @example
     * // Get one Avatars
     * const avatars = await prisma.avatars.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarsFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatars.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarsWithIdOnly = await prisma.avatars.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarsFindManyArgs>(args?: SelectSubset<T, AvatarsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Avatars.
     * @param {AvatarsCreateArgs} args - Arguments to create a Avatars.
     * @example
     * // Create one Avatars
     * const Avatars = await prisma.avatars.create({
     *   data: {
     *     // ... data to create a Avatars
     *   }
     * })
     * 
     */
    create<T extends AvatarsCreateArgs>(args: SelectSubset<T, AvatarsCreateArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Avatars.
     * @param {AvatarsCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatars = await prisma.avatars.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarsCreateManyArgs>(args?: SelectSubset<T, AvatarsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Avatars.
     * @param {AvatarsDeleteArgs} args - Arguments to delete one Avatars.
     * @example
     * // Delete one Avatars
     * const Avatars = await prisma.avatars.delete({
     *   where: {
     *     // ... filter to delete one Avatars
     *   }
     * })
     * 
     */
    delete<T extends AvatarsDeleteArgs>(args: SelectSubset<T, AvatarsDeleteArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Avatars.
     * @param {AvatarsUpdateArgs} args - Arguments to update one Avatars.
     * @example
     * // Update one Avatars
     * const avatars = await prisma.avatars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarsUpdateArgs>(args: SelectSubset<T, AvatarsUpdateArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarsDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarsDeleteManyArgs>(args?: SelectSubset<T, AvatarsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatars = await prisma.avatars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarsUpdateManyArgs>(args: SelectSubset<T, AvatarsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Avatars.
     * @param {AvatarsUpsertArgs} args - Arguments to update or create a Avatars.
     * @example
     * // Update or create a Avatars
     * const avatars = await prisma.avatars.upsert({
     *   create: {
     *     // ... data to create a Avatars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatars we want to update
     *   }
     * })
     */
    upsert<T extends AvatarsUpsertArgs>(args: SelectSubset<T, AvatarsUpsertArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Avatars that matches the filter.
     * @param {AvatarsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const avatars = await prisma.avatars.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AvatarsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Avatars.
     * @param {AvatarsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const avatars = await prisma.avatars.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AvatarsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarsCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatars.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarsCountArgs>(
      args?: Subset<T, AvatarsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvatarsAggregateArgs>(args: Subset<T, AvatarsAggregateArgs>): Prisma.PrismaPromise<GetAvatarsAggregateType<T>>

    /**
     * Group by Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarsGroupByArgs} args - Group by arguments.
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
      T extends AvatarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarsGroupByArgs['orderBy'] }
        : { orderBy?: AvatarsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvatarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatars model
   */
  readonly fields: AvatarsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Avatars model
   */ 
  interface AvatarsFieldRefs {
    readonly id: FieldRef<"Avatars", 'String'>
    readonly public_id: FieldRef<"Avatars", 'String'>
    readonly url: FieldRef<"Avatars", 'String'>
    readonly userId: FieldRef<"Avatars", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Avatars findUnique
   */
  export type AvatarsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where: AvatarsWhereUniqueInput
  }

  /**
   * Avatars findUniqueOrThrow
   */
  export type AvatarsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where: AvatarsWhereUniqueInput
  }

  /**
   * Avatars findFirst
   */
  export type AvatarsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarsOrderByWithRelationInput | AvatarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarsScalarFieldEnum | AvatarsScalarFieldEnum[]
  }

  /**
   * Avatars findFirstOrThrow
   */
  export type AvatarsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarsOrderByWithRelationInput | AvatarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarsScalarFieldEnum | AvatarsScalarFieldEnum[]
  }

  /**
   * Avatars findMany
   */
  export type AvatarsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarsOrderByWithRelationInput | AvatarsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarsScalarFieldEnum | AvatarsScalarFieldEnum[]
  }

  /**
   * Avatars create
   */
  export type AvatarsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatars.
     */
    data: XOR<AvatarsCreateInput, AvatarsUncheckedCreateInput>
  }

  /**
   * Avatars createMany
   */
  export type AvatarsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarsCreateManyInput | AvatarsCreateManyInput[]
  }

  /**
   * Avatars update
   */
  export type AvatarsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatars.
     */
    data: XOR<AvatarsUpdateInput, AvatarsUncheckedUpdateInput>
    /**
     * Choose, which Avatars to update.
     */
    where: AvatarsWhereUniqueInput
  }

  /**
   * Avatars updateMany
   */
  export type AvatarsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarsUpdateManyMutationInput, AvatarsUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarsWhereInput
  }

  /**
   * Avatars upsert
   */
  export type AvatarsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatars to update in case it exists.
     */
    where: AvatarsWhereUniqueInput
    /**
     * In case the Avatars found by the `where` argument doesn't exist, create a new Avatars with this data.
     */
    create: XOR<AvatarsCreateInput, AvatarsUncheckedCreateInput>
    /**
     * In case the Avatars was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarsUpdateInput, AvatarsUncheckedUpdateInput>
  }

  /**
   * Avatars delete
   */
  export type AvatarsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    /**
     * Filter which Avatars to delete.
     */
    where: AvatarsWhereUniqueInput
  }

  /**
   * Avatars deleteMany
   */
  export type AvatarsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarsWhereInput
  }

  /**
   * Avatars findRaw
   */
  export type AvatarsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Avatars aggregateRaw
   */
  export type AvatarsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Avatars without action
   */
  export type AvatarsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    phone_number: number | null
  }

  export type UserSumAggregateOutputType = {
    phone_number: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone_number: number | null
    address: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone_number: number | null
    address: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone_number: number
    address: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    phone_number?: true
  }

  export type UserSumAggregateInputType = {
    phone_number?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    address?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    address?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone_number?: true
    address?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone_number: number | null
    address: string | null
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone_number?: boolean
    address?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      avatars: Prisma.$AvatarsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone_number: number | null
      address: string | null
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany"> | Null>
    avatars<T extends User$avatarsArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarsArgs<ExtArgs>>): Prisma__AvatarsClient<$Result.GetResult<Prisma.$AvatarsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'Float'>
    readonly address: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * User.avatars
   */
  export type User$avatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatars
     */
    select?: AvatarsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarsInclude<ExtArgs> | null
    where?: AvatarsWhereInput
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: string | null
    review: string | null
    rating: number | null
    userId: string | null
    foodId: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: string | null
    review: string | null
    rating: number | null
    userId: string | null
    foodId: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    review: number
    rating: number
    userId: number
    foodId: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    review?: true
    rating?: true
    userId?: true
    foodId?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    review?: true
    rating?: true
    userId?: true
    foodId?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    review?: true
    rating?: true
    userId?: true
    foodId?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: string
    review: string
    rating: number
    userId: string
    foodId: string
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    review?: boolean
    rating?: boolean
    userId?: boolean
    foodId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>


  export type ReviewsSelectScalar = {
    id?: boolean
    review?: boolean
    rating?: boolean
    userId?: boolean
    foodId?: boolean
  }

  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    food?: boolean | FoodsDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      food: Prisma.$FoodsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      review: string
      rating: number
      userId: string
      foodId: string
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const reviews = await prisma.reviews.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ReviewsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Reviews.
     * @param {ReviewsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const reviews = await prisma.reviews.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReviewsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    food<T extends FoodsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodsDefaultArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'String'>
    readonly review: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Float'>
    readonly userId: FieldRef<"Reviews", 'String'>
    readonly foodId: FieldRef<"Reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
  }

  /**
   * Reviews findRaw
   */
  export type ReviewsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Reviews aggregateRaw
   */
  export type ReviewsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Foods
   */

  export type AggregateFoods = {
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  export type FoodsAvgAggregateOutputType = {
    price: number | null
    estimatedPrice: number | null
  }

  export type FoodsSumAggregateOutputType = {
    price: number | null
    estimatedPrice: number | null
  }

  export type FoodsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    estimatedPrice: number | null
    category: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    estimatedPrice: number | null
    category: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    estimatedPrice: number
    category: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodsAvgAggregateInputType = {
    price?: true
    estimatedPrice?: true
  }

  export type FoodsSumAggregateInputType = {
    price?: true
    estimatedPrice?: true
  }

  export type FoodsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    estimatedPrice?: true
    category?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    estimatedPrice?: true
    category?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    estimatedPrice?: true
    category?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to aggregate.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodsMaxAggregateInputType
  }

  export type GetFoodsAggregateType<T extends FoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateFoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoods[P]>
      : GetScalarType<T[P], AggregateFoods[P]>
  }




  export type FoodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodsWhereInput
    orderBy?: FoodsOrderByWithAggregationInput | FoodsOrderByWithAggregationInput[]
    by: FoodsScalarFieldEnum[] | FoodsScalarFieldEnum
    having?: FoodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodsCountAggregateInputType | true
    _avg?: FoodsAvgAggregateInputType
    _sum?: FoodsSumAggregateInputType
    _min?: FoodsMinAggregateInputType
    _max?: FoodsMaxAggregateInputType
  }

  export type FoodsGroupByOutputType = {
    id: string
    name: string
    description: string
    price: number
    estimatedPrice: number | null
    category: string
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  type GetFoodsGroupByPayload<T extends FoodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodsGroupByOutputType[P]>
            : GetScalarType<T[P], FoodsGroupByOutputType[P]>
        }
      >
    >


  export type FoodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    estimatedPrice?: boolean
    category?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Foods$imagesArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    Reviews?: boolean | Foods$ReviewsArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foods"]>


  export type FoodsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    estimatedPrice?: boolean
    category?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Foods$imagesArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    Reviews?: boolean | Foods$ReviewsArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foods"
    objects: {
      images: Prisma.$ImagesPayload<ExtArgs>[]
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      price: number
      estimatedPrice: number | null
      category: string
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foods"]>
    composites: {}
  }

  type FoodsGetPayload<S extends boolean | null | undefined | FoodsDefaultArgs> = $Result.GetResult<Prisma.$FoodsPayload, S>

  type FoodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoodsCountAggregateInputType | true
    }

  export interface FoodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foods'], meta: { name: 'Foods' } }
    /**
     * Find zero or one Foods that matches the filter.
     * @param {FoodsFindUniqueArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodsFindUniqueArgs>(args: SelectSubset<T, FoodsFindUniqueArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Foods that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FoodsFindUniqueOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodsFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodsFindFirstArgs>(args?: SelectSubset<T, FoodsFindFirstArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Foods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodsFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.foods.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.foods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodsWithIdOnly = await prisma.foods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodsFindManyArgs>(args?: SelectSubset<T, FoodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Foods.
     * @param {FoodsCreateArgs} args - Arguments to create a Foods.
     * @example
     * // Create one Foods
     * const Foods = await prisma.foods.create({
     *   data: {
     *     // ... data to create a Foods
     *   }
     * })
     * 
     */
    create<T extends FoodsCreateArgs>(args: SelectSubset<T, FoodsCreateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Foods.
     * @param {FoodsCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const foods = await prisma.foods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodsCreateManyArgs>(args?: SelectSubset<T, FoodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foods.
     * @param {FoodsDeleteArgs} args - Arguments to delete one Foods.
     * @example
     * // Delete one Foods
     * const Foods = await prisma.foods.delete({
     *   where: {
     *     // ... filter to delete one Foods
     *   }
     * })
     * 
     */
    delete<T extends FoodsDeleteArgs>(args: SelectSubset<T, FoodsDeleteArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Foods.
     * @param {FoodsUpdateArgs} args - Arguments to update one Foods.
     * @example
     * // Update one Foods
     * const foods = await prisma.foods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodsUpdateArgs>(args: SelectSubset<T, FoodsUpdateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Foods.
     * @param {FoodsDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.foods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodsDeleteManyArgs>(args?: SelectSubset<T, FoodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const foods = await prisma.foods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodsUpdateManyArgs>(args: SelectSubset<T, FoodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foods.
     * @param {FoodsUpsertArgs} args - Arguments to update or create a Foods.
     * @example
     * // Update or create a Foods
     * const foods = await prisma.foods.upsert({
     *   create: {
     *     // ... data to create a Foods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foods we want to update
     *   }
     * })
     */
    upsert<T extends FoodsUpsertArgs>(args: SelectSubset<T, FoodsUpsertArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Foods that matches the filter.
     * @param {FoodsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const foods = await prisma.foods.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: FoodsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Foods.
     * @param {FoodsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const foods = await prisma.foods.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FoodsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.foods.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodsCountArgs>(
      args?: Subset<T, FoodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodsAggregateArgs>(args: Subset<T, FoodsAggregateArgs>): Prisma.PrismaPromise<GetFoodsAggregateType<T>>

    /**
     * Group by Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsGroupByArgs} args - Group by arguments.
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
      T extends FoodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodsGroupByArgs['orderBy'] }
        : { orderBy?: FoodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foods model
   */
  readonly fields: FoodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Foods$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Foods$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany"> | Null>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Reviews<T extends Foods$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Foods$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Foods model
   */ 
  interface FoodsFieldRefs {
    readonly id: FieldRef<"Foods", 'String'>
    readonly name: FieldRef<"Foods", 'String'>
    readonly description: FieldRef<"Foods", 'String'>
    readonly price: FieldRef<"Foods", 'Int'>
    readonly estimatedPrice: FieldRef<"Foods", 'Int'>
    readonly category: FieldRef<"Foods", 'String'>
    readonly restaurantId: FieldRef<"Foods", 'String'>
    readonly createdAt: FieldRef<"Foods", 'DateTime'>
    readonly updatedAt: FieldRef<"Foods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Foods findUnique
   */
  export type FoodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findUniqueOrThrow
   */
  export type FoodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findFirst
   */
  export type FoodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findFirstOrThrow
   */
  export type FoodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findMany
   */
  export type FoodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods create
   */
  export type FoodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to create a Foods.
     */
    data: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
  }

  /**
   * Foods createMany
   */
  export type FoodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodsCreateManyInput | FoodsCreateManyInput[]
  }

  /**
   * Foods update
   */
  export type FoodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to update a Foods.
     */
    data: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
    /**
     * Choose, which Foods to update.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods updateMany
   */
  export type FoodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodsUpdateManyMutationInput, FoodsUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodsWhereInput
  }

  /**
   * Foods upsert
   */
  export type FoodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The filter to search for the Foods to update in case it exists.
     */
    where: FoodsWhereUniqueInput
    /**
     * In case the Foods found by the `where` argument doesn't exist, create a new Foods with this data.
     */
    create: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
    /**
     * In case the Foods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
  }

  /**
   * Foods delete
   */
  export type FoodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter which Foods to delete.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods deleteMany
   */
  export type FoodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodsWhereInput
  }

  /**
   * Foods findRaw
   */
  export type FoodsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Foods aggregateRaw
   */
  export type FoodsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Foods.images
   */
  export type Foods$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Foods.Reviews
   */
  export type Foods$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Foods without action
   */
  export type FoodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    phone_number: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    phone_number: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    city: string | null
    address: string | null
    email: string | null
    phone_number: number | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    city: string | null
    address: string | null
    email: string | null
    phone_number: number | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    country: number
    city: number
    address: number
    email: number
    phone_number: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    phone_number?: true
  }

  export type RestaurantSumAggregateInputType = {
    phone_number?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    address?: true
    email?: true
    phone_number?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    address?: true
    email?: true
    phone_number?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    city?: true
    address?: true
    email?: true
    phone_number?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    country: string
    city: string
    address: string
    email: string
    phone_number: number
    password: string
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Foods?: boolean | Restaurant$FoodsArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>


  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    city?: boolean
    address?: boolean
    email?: boolean
    phone_number?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Foods?: boolean | Restaurant$FoodsArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      Foods: Prisma.$FoodsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string
      city: string
      address: string
      email: string
      phone_number: number
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Restaurants that matches the filter.
     * @param {RestaurantFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const restaurant = await prisma.restaurant.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: RestaurantFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Restaurant.
     * @param {RestaurantAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const restaurant = await prisma.restaurant.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RestaurantAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Foods<T extends Restaurant$FoodsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$FoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Restaurant model
   */ 
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly country: FieldRef<"Restaurant", 'String'>
    readonly city: FieldRef<"Restaurant", 'String'>
    readonly address: FieldRef<"Restaurant", 'String'>
    readonly email: FieldRef<"Restaurant", 'String'>
    readonly phone_number: FieldRef<"Restaurant", 'Float'>
    readonly password: FieldRef<"Restaurant", 'String'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
  }

  /**
   * Restaurant findRaw
   */
  export type RestaurantFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Restaurant aggregateRaw
   */
  export type RestaurantAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Restaurant.Foods
   */
  export type Restaurant$FoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    where?: FoodsWhereInput
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    cursor?: FoodsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesMinAggregateOutputType = {
    id: string | null
    public_id: string | null
    url: string | null
    foodId: string | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: string | null
    public_id: string | null
    url: string | null
    foodId: string | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    public_id: number
    url: number
    foodId: number
    _all: number
  }


  export type ImagesMinAggregateInputType = {
    id?: true
    public_id?: true
    url?: true
    foodId?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    public_id?: true
    url?: true
    foodId?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    public_id?: true
    url?: true
    foodId?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: string
    public_id: string
    url: string
    foodId: string
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    public_id?: boolean
    url?: boolean
    foodId?: boolean
    food?: boolean | FoodsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>


  export type ImagesSelectScalar = {
    id?: boolean
    public_id?: boolean
    url?: boolean
    foodId?: boolean
  }

  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodsDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      food: Prisma.$FoodsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      public_id: string
      url: string
      foodId: string
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * @param {ImagesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const images = await prisma.images.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ImagesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Images.
     * @param {ImagesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const images = await prisma.images.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ImagesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
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
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodsDefaultArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Images model
   */ 
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'String'>
    readonly public_id: FieldRef<"Images", 'String'>
    readonly url: FieldRef<"Images", 'String'>
    readonly foodId: FieldRef<"Images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
  }

  /**
   * Images findRaw
   */
  export type ImagesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Images aggregateRaw
   */
  export type ImagesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AvatarsScalarFieldEnum: {
    id: 'id',
    public_id: 'public_id',
    url: 'url',
    userId: 'userId'
  };

  export type AvatarsScalarFieldEnum = (typeof AvatarsScalarFieldEnum)[keyof typeof AvatarsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone_number: 'phone_number',
    address: 'address',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    review: 'review',
    rating: 'rating',
    userId: 'userId',
    foodId: 'foodId'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const FoodsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    estimatedPrice: 'estimatedPrice',
    category: 'category',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodsScalarFieldEnum = (typeof FoodsScalarFieldEnum)[keyof typeof FoodsScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    city: 'city',
    address: 'address',
    email: 'email',
    phone_number: 'phone_number',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    public_id: 'public_id',
    url: 'url',
    foodId: 'foodId'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AvatarsWhereInput = {
    AND?: AvatarsWhereInput | AvatarsWhereInput[]
    OR?: AvatarsWhereInput[]
    NOT?: AvatarsWhereInput | AvatarsWhereInput[]
    id?: StringFilter<"Avatars"> | string
    public_id?: StringFilter<"Avatars"> | string
    url?: StringFilter<"Avatars"> | string
    userId?: StringFilter<"Avatars"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AvatarsOrderByWithRelationInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvatarsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AvatarsWhereInput | AvatarsWhereInput[]
    OR?: AvatarsWhereInput[]
    NOT?: AvatarsWhereInput | AvatarsWhereInput[]
    public_id?: StringFilter<"Avatars"> | string
    url?: StringFilter<"Avatars"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AvatarsOrderByWithAggregationInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    _count?: AvatarsCountOrderByAggregateInput
    _max?: AvatarsMaxOrderByAggregateInput
    _min?: AvatarsMinOrderByAggregateInput
  }

  export type AvatarsScalarWhereWithAggregatesInput = {
    AND?: AvatarsScalarWhereWithAggregatesInput | AvatarsScalarWhereWithAggregatesInput[]
    OR?: AvatarsScalarWhereWithAggregatesInput[]
    NOT?: AvatarsScalarWhereWithAggregatesInput | AvatarsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avatars"> | string
    public_id?: StringWithAggregatesFilter<"Avatars"> | string
    url?: StringWithAggregatesFilter<"Avatars"> | string
    userId?: StringWithAggregatesFilter<"Avatars"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone_number?: FloatNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewsListRelationFilter
    avatars?: XOR<AvatarsNullableRelationFilter, AvatarsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewsOrderByRelationAggregateInput
    avatars?: AvatarsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone_number?: FloatNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewsListRelationFilter
    avatars?: XOR<AvatarsNullableRelationFilter, AvatarsWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone_number?: FloatNullableWithAggregatesFilter<"User"> | number | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: StringFilter<"Reviews"> | string
    review?: StringFilter<"Reviews"> | string
    rating?: FloatFilter<"Reviews"> | number
    userId?: StringFilter<"Reviews"> | string
    foodId?: StringFilter<"Reviews"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    food?: XOR<FoodsRelationFilter, FoodsWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    user?: UserOrderByWithRelationInput
    food?: FoodsOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    review?: StringFilter<"Reviews"> | string
    rating?: FloatFilter<"Reviews"> | number
    userId?: StringFilter<"Reviews"> | string
    foodId?: StringFilter<"Reviews"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    food?: XOR<FoodsRelationFilter, FoodsWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reviews"> | string
    review?: StringWithAggregatesFilter<"Reviews"> | string
    rating?: FloatWithAggregatesFilter<"Reviews"> | number
    userId?: StringWithAggregatesFilter<"Reviews"> | string
    foodId?: StringWithAggregatesFilter<"Reviews"> | string
  }

  export type FoodsWhereInput = {
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    id?: StringFilter<"Foods"> | string
    name?: StringFilter<"Foods"> | string
    description?: StringFilter<"Foods"> | string
    price?: IntFilter<"Foods"> | number
    estimatedPrice?: IntNullableFilter<"Foods"> | number | null
    category?: StringFilter<"Foods"> | string
    restaurantId?: StringFilter<"Foods"> | string
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
    images?: ImagesListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    Reviews?: ReviewsListRelationFilter
  }

  export type FoodsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    estimatedPrice?: SortOrder
    category?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImagesOrderByRelationAggregateInput
    restaurant?: RestaurantOrderByWithRelationInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type FoodsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    name?: StringFilter<"Foods"> | string
    description?: StringFilter<"Foods"> | string
    price?: IntFilter<"Foods"> | number
    estimatedPrice?: IntNullableFilter<"Foods"> | number | null
    category?: StringFilter<"Foods"> | string
    restaurantId?: StringFilter<"Foods"> | string
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
    images?: ImagesListRelationFilter
    restaurant?: XOR<RestaurantRelationFilter, RestaurantWhereInput>
    Reviews?: ReviewsListRelationFilter
  }, "id">

  export type FoodsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    estimatedPrice?: SortOrder
    category?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodsCountOrderByAggregateInput
    _avg?: FoodsAvgOrderByAggregateInput
    _max?: FoodsMaxOrderByAggregateInput
    _min?: FoodsMinOrderByAggregateInput
    _sum?: FoodsSumOrderByAggregateInput
  }

  export type FoodsScalarWhereWithAggregatesInput = {
    AND?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    OR?: FoodsScalarWhereWithAggregatesInput[]
    NOT?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Foods"> | string
    name?: StringWithAggregatesFilter<"Foods"> | string
    description?: StringWithAggregatesFilter<"Foods"> | string
    price?: IntWithAggregatesFilter<"Foods"> | number
    estimatedPrice?: IntNullableWithAggregatesFilter<"Foods"> | number | null
    category?: StringWithAggregatesFilter<"Foods"> | string
    restaurantId?: StringWithAggregatesFilter<"Foods"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Foods"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Foods"> | Date | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    country?: StringFilter<"Restaurant"> | string
    city?: StringFilter<"Restaurant"> | string
    address?: StringFilter<"Restaurant"> | string
    email?: StringFilter<"Restaurant"> | string
    phone_number?: FloatFilter<"Restaurant"> | number
    password?: StringFilter<"Restaurant"> | string
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    Foods?: FoodsListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Foods?: FoodsOrderByRelationAggregateInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: number
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    country?: StringFilter<"Restaurant"> | string
    city?: StringFilter<"Restaurant"> | string
    address?: StringFilter<"Restaurant"> | string
    password?: StringFilter<"Restaurant"> | string
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    Foods?: FoodsListRelationFilter
  }, "id" | "email" | "phone_number">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    country?: StringWithAggregatesFilter<"Restaurant"> | string
    city?: StringWithAggregatesFilter<"Restaurant"> | string
    address?: StringWithAggregatesFilter<"Restaurant"> | string
    email?: StringWithAggregatesFilter<"Restaurant"> | string
    phone_number?: FloatWithAggregatesFilter<"Restaurant"> | number
    password?: StringWithAggregatesFilter<"Restaurant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: StringFilter<"Images"> | string
    public_id?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    foodId?: StringFilter<"Images"> | string
    food?: XOR<FoodsRelationFilter, FoodsWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    foodId?: SortOrder
    food?: FoodsOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    public_id?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    foodId?: StringFilter<"Images"> | string
    food?: XOR<FoodsRelationFilter, FoodsWhereInput>
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    foodId?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Images"> | string
    public_id?: StringWithAggregatesFilter<"Images"> | string
    url?: StringWithAggregatesFilter<"Images"> | string
    foodId?: StringWithAggregatesFilter<"Images"> | string
  }

  export type AvatarsCreateInput = {
    id?: string
    public_id: string
    url: string
    user: UserCreateNestedOneWithoutAvatarsInput
  }

  export type AvatarsUncheckedCreateInput = {
    id?: string
    public_id: string
    url: string
    userId: string
  }

  export type AvatarsUpdateInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAvatarsNestedInput
  }

  export type AvatarsUncheckedUpdateInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarsCreateManyInput = {
    id?: string
    public_id: string
    url: string
    userId: string
  }

  export type AvatarsUpdateManyMutationInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarsUncheckedUpdateManyInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone_number?: number | null
    address?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsCreateNestedManyWithoutUserInput
    avatars?: AvatarsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone_number?: number | null
    address?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
    avatars?: AvatarsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
    avatars?: AvatarsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
    avatars?: AvatarsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone_number?: number | null
    address?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    id?: string
    review: string
    rating: number
    user: UserCreateNestedOneWithoutReviewsInput
    food: FoodsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: string
    review: string
    rating: number
    userId: string
    foodId: string
  }

  export type ReviewsUpdateInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    food?: FoodsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateManyInput = {
    id?: string
    review: string
    rating: number
    userId: string
    foodId: string
  }

  export type ReviewsUpdateManyMutationInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
  }

  export type ReviewsUncheckedUpdateManyInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodsCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutFoodInput
    restaurant: RestaurantCreateNestedOneWithoutFoodsInput
    Reviews?: ReviewsCreateNestedManyWithoutFoodInput
  }

  export type FoodsUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutFoodInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutFoodNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutFoodsNestedInput
    Reviews?: ReviewsUpdateManyWithoutFoodNestedInput
  }

  export type FoodsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutFoodNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodsCreateManyInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    email: string
    phone_number: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Foods?: FoodsCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    email: string
    phone_number: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Foods?: FoodsUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Foods?: FoodsUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Foods?: FoodsUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    email: string
    phone_number: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateInput = {
    id?: string
    public_id: string
    url: string
    food: FoodsCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: string
    public_id: string
    url: string
    foodId: string
  }

  export type ImagesUpdateInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    food?: FoodsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateManyInput = {
    id?: string
    public_id: string
    url: string
    foodId: string
  }

  export type ImagesUpdateManyMutationInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    foodId?: StringFieldUpdateOperationsInput | string
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AvatarsCountOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type AvatarsMaxOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
  }

  export type AvatarsMinOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type AvatarsNullableRelationFilter = {
    is?: AvatarsWhereInput | null
    isNot?: AvatarsWhereInput | null
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    phone_number?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    phone_number?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
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

  export type FoodsRelationFilter = {
    is?: FoodsWhereInput
    isNot?: FoodsWhereInput
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type RestaurantRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    estimatedPrice?: SortOrder
    category?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsAvgOrderByAggregateInput = {
    price?: SortOrder
    estimatedPrice?: SortOrder
  }

  export type FoodsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    estimatedPrice?: SortOrder
    category?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    estimatedPrice?: SortOrder
    category?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodsSumOrderByAggregateInput = {
    price?: SortOrder
    estimatedPrice?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FoodsListRelationFilter = {
    every?: FoodsWhereInput
    some?: FoodsWhereInput
    none?: FoodsWhereInput
  }

  export type FoodsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    phone_number?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    city?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    phone_number?: SortOrder
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    foodId?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    foodId?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    foodId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAvatarsInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutAvatarsNestedInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    upsert?: UserUpsertWithoutAvatarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvatarsInput, UserUpdateWithoutAvatarsInput>, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type AvatarsCreateNestedOneWithoutUserInput = {
    create?: XOR<AvatarsCreateWithoutUserInput, AvatarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarsCreateOrConnectWithoutUserInput
    connect?: AvatarsWhereUniqueInput
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type AvatarsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AvatarsCreateWithoutUserInput, AvatarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarsCreateOrConnectWithoutUserInput
    connect?: AvatarsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type AvatarsUpdateOneWithoutUserNestedInput = {
    create?: XOR<AvatarsCreateWithoutUserInput, AvatarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarsCreateOrConnectWithoutUserInput
    upsert?: AvatarsUpsertWithoutUserInput
    disconnect?: AvatarsWhereInput | boolean
    delete?: AvatarsWhereInput | boolean
    connect?: AvatarsWhereUniqueInput
    update?: XOR<XOR<AvatarsUpdateToOneWithWhereWithoutUserInput, AvatarsUpdateWithoutUserInput>, AvatarsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type AvatarsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AvatarsCreateWithoutUserInput, AvatarsUncheckedCreateWithoutUserInput>
    connectOrCreate?: AvatarsCreateOrConnectWithoutUserInput
    upsert?: AvatarsUpsertWithoutUserInput
    disconnect?: AvatarsWhereInput | boolean
    delete?: AvatarsWhereInput | boolean
    connect?: AvatarsWhereUniqueInput
    update?: XOR<XOR<AvatarsUpdateToOneWithWhereWithoutUserInput, AvatarsUpdateWithoutUserInput>, AvatarsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type FoodsCreateNestedOneWithoutReviewsInput = {
    create?: XOR<FoodsCreateWithoutReviewsInput, FoodsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutReviewsInput
    connect?: FoodsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type FoodsUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<FoodsCreateWithoutReviewsInput, FoodsUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutReviewsInput
    upsert?: FoodsUpsertWithoutReviewsInput
    connect?: FoodsWhereUniqueInput
    update?: XOR<XOR<FoodsUpdateToOneWithWhereWithoutReviewsInput, FoodsUpdateWithoutReviewsInput>, FoodsUncheckedUpdateWithoutReviewsInput>
  }

  export type ImagesCreateNestedManyWithoutFoodInput = {
    create?: XOR<ImagesCreateWithoutFoodInput, ImagesUncheckedCreateWithoutFoodInput> | ImagesCreateWithoutFoodInput[] | ImagesUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutFoodInput | ImagesCreateOrConnectWithoutFoodInput[]
    createMany?: ImagesCreateManyFoodInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type RestaurantCreateNestedOneWithoutFoodsInput = {
    create?: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFoodsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutFoodInput = {
    create?: XOR<ReviewsCreateWithoutFoodInput, ReviewsUncheckedCreateWithoutFoodInput> | ReviewsCreateWithoutFoodInput[] | ReviewsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutFoodInput | ReviewsCreateOrConnectWithoutFoodInput[]
    createMany?: ReviewsCreateManyFoodInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<ImagesCreateWithoutFoodInput, ImagesUncheckedCreateWithoutFoodInput> | ImagesCreateWithoutFoodInput[] | ImagesUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutFoodInput | ImagesCreateOrConnectWithoutFoodInput[]
    createMany?: ImagesCreateManyFoodInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<ReviewsCreateWithoutFoodInput, ReviewsUncheckedCreateWithoutFoodInput> | ReviewsCreateWithoutFoodInput[] | ReviewsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutFoodInput | ReviewsCreateOrConnectWithoutFoodInput[]
    createMany?: ReviewsCreateManyFoodInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type ImagesUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ImagesCreateWithoutFoodInput, ImagesUncheckedCreateWithoutFoodInput> | ImagesCreateWithoutFoodInput[] | ImagesUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutFoodInput | ImagesCreateOrConnectWithoutFoodInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutFoodInput | ImagesUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ImagesCreateManyFoodInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutFoodInput | ImagesUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutFoodInput | ImagesUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFoodsInput
    upsert?: RestaurantUpsertWithoutFoodsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutFoodsInput, RestaurantUpdateWithoutFoodsInput>, RestaurantUncheckedUpdateWithoutFoodsInput>
  }

  export type ReviewsUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ReviewsCreateWithoutFoodInput, ReviewsUncheckedCreateWithoutFoodInput> | ReviewsCreateWithoutFoodInput[] | ReviewsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutFoodInput | ReviewsCreateOrConnectWithoutFoodInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutFoodInput | ReviewsUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ReviewsCreateManyFoodInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutFoodInput | ReviewsUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutFoodInput | ReviewsUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ImagesCreateWithoutFoodInput, ImagesUncheckedCreateWithoutFoodInput> | ImagesCreateWithoutFoodInput[] | ImagesUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutFoodInput | ImagesCreateOrConnectWithoutFoodInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutFoodInput | ImagesUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ImagesCreateManyFoodInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutFoodInput | ImagesUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutFoodInput | ImagesUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ReviewsCreateWithoutFoodInput, ReviewsUncheckedCreateWithoutFoodInput> | ReviewsCreateWithoutFoodInput[] | ReviewsUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutFoodInput | ReviewsCreateOrConnectWithoutFoodInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutFoodInput | ReviewsUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ReviewsCreateManyFoodInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutFoodInput | ReviewsUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutFoodInput | ReviewsUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type FoodsCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FoodsCreateWithoutRestaurantInput, FoodsUncheckedCreateWithoutRestaurantInput> | FoodsCreateWithoutRestaurantInput[] | FoodsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutRestaurantInput | FoodsCreateOrConnectWithoutRestaurantInput[]
    createMany?: FoodsCreateManyRestaurantInputEnvelope
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
  }

  export type FoodsUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<FoodsCreateWithoutRestaurantInput, FoodsUncheckedCreateWithoutRestaurantInput> | FoodsCreateWithoutRestaurantInput[] | FoodsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutRestaurantInput | FoodsCreateOrConnectWithoutRestaurantInput[]
    createMany?: FoodsCreateManyRestaurantInputEnvelope
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
  }

  export type FoodsUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FoodsCreateWithoutRestaurantInput, FoodsUncheckedCreateWithoutRestaurantInput> | FoodsCreateWithoutRestaurantInput[] | FoodsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutRestaurantInput | FoodsCreateOrConnectWithoutRestaurantInput[]
    upsert?: FoodsUpsertWithWhereUniqueWithoutRestaurantInput | FoodsUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FoodsCreateManyRestaurantInputEnvelope
    set?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    disconnect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    delete?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    update?: FoodsUpdateWithWhereUniqueWithoutRestaurantInput | FoodsUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FoodsUpdateManyWithWhereWithoutRestaurantInput | FoodsUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
  }

  export type FoodsUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<FoodsCreateWithoutRestaurantInput, FoodsUncheckedCreateWithoutRestaurantInput> | FoodsCreateWithoutRestaurantInput[] | FoodsUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: FoodsCreateOrConnectWithoutRestaurantInput | FoodsCreateOrConnectWithoutRestaurantInput[]
    upsert?: FoodsUpsertWithWhereUniqueWithoutRestaurantInput | FoodsUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: FoodsCreateManyRestaurantInputEnvelope
    set?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    disconnect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    delete?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    connect?: FoodsWhereUniqueInput | FoodsWhereUniqueInput[]
    update?: FoodsUpdateWithWhereUniqueWithoutRestaurantInput | FoodsUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: FoodsUpdateManyWithWhereWithoutRestaurantInput | FoodsUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
  }

  export type FoodsCreateNestedOneWithoutImagesInput = {
    create?: XOR<FoodsCreateWithoutImagesInput, FoodsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutImagesInput
    connect?: FoodsWhereUniqueInput
  }

  export type FoodsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<FoodsCreateWithoutImagesInput, FoodsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutImagesInput
    upsert?: FoodsUpsertWithoutImagesInput
    connect?: FoodsWhereUniqueInput
    update?: XOR<XOR<FoodsUpdateToOneWithWhereWithoutImagesInput, FoodsUpdateWithoutImagesInput>, FoodsUncheckedUpdateWithoutImagesInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserCreateWithoutAvatarsInput = {
    id?: string
    name: string
    email: string
    phone_number?: number | null
    address?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvatarsInput = {
    id?: string
    name: string
    email: string
    phone_number?: number | null
    address?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvatarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
  }

  export type UserUpsertWithoutAvatarsInput = {
    update: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvatarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type UserUpdateWithoutAvatarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewsCreateWithoutUserInput = {
    id?: string
    review: string
    rating: number
    food: FoodsCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    id?: string
    review: string
    rating: number
    foodId: string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
  }

  export type AvatarsCreateWithoutUserInput = {
    id?: string
    public_id: string
    url: string
  }

  export type AvatarsUncheckedCreateWithoutUserInput = {
    id?: string
    public_id: string
    url: string
  }

  export type AvatarsCreateOrConnectWithoutUserInput = {
    where: AvatarsWhereUniqueInput
    create: XOR<AvatarsCreateWithoutUserInput, AvatarsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: StringFilter<"Reviews"> | string
    review?: StringFilter<"Reviews"> | string
    rating?: FloatFilter<"Reviews"> | number
    userId?: StringFilter<"Reviews"> | string
    foodId?: StringFilter<"Reviews"> | string
  }

  export type AvatarsUpsertWithoutUserInput = {
    update: XOR<AvatarsUpdateWithoutUserInput, AvatarsUncheckedUpdateWithoutUserInput>
    create: XOR<AvatarsCreateWithoutUserInput, AvatarsUncheckedCreateWithoutUserInput>
    where?: AvatarsWhereInput
  }

  export type AvatarsUpdateToOneWithWhereWithoutUserInput = {
    where?: AvatarsWhereInput
    data: XOR<AvatarsUpdateWithoutUserInput, AvatarsUncheckedUpdateWithoutUserInput>
  }

  export type AvatarsUpdateWithoutUserInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarsUncheckedUpdateWithoutUserInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    phone_number?: number | null
    address?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatars?: AvatarsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    phone_number?: number | null
    address?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    avatars?: AvatarsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type FoodsCreateWithoutReviewsInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutFoodInput
    restaurant: RestaurantCreateNestedOneWithoutFoodsInput
  }

  export type FoodsUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodsCreateOrConnectWithoutReviewsInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutReviewsInput, FoodsUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatars?: AvatarsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatars?: AvatarsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FoodsUpsertWithoutReviewsInput = {
    update: XOR<FoodsUpdateWithoutReviewsInput, FoodsUncheckedUpdateWithoutReviewsInput>
    create: XOR<FoodsCreateWithoutReviewsInput, FoodsUncheckedCreateWithoutReviewsInput>
    where?: FoodsWhereInput
  }

  export type FoodsUpdateToOneWithWhereWithoutReviewsInput = {
    where?: FoodsWhereInput
    data: XOR<FoodsUpdateWithoutReviewsInput, FoodsUncheckedUpdateWithoutReviewsInput>
  }

  export type FoodsUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutFoodNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type ImagesCreateWithoutFoodInput = {
    id?: string
    public_id: string
    url: string
  }

  export type ImagesUncheckedCreateWithoutFoodInput = {
    id?: string
    public_id: string
    url: string
  }

  export type ImagesCreateOrConnectWithoutFoodInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutFoodInput, ImagesUncheckedCreateWithoutFoodInput>
  }

  export type ImagesCreateManyFoodInputEnvelope = {
    data: ImagesCreateManyFoodInput | ImagesCreateManyFoodInput[]
  }

  export type RestaurantCreateWithoutFoodsInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    email: string
    phone_number: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUncheckedCreateWithoutFoodsInput = {
    id?: string
    name: string
    country: string
    city: string
    address: string
    email: string
    phone_number: number
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantCreateOrConnectWithoutFoodsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
  }

  export type ReviewsCreateWithoutFoodInput = {
    id?: string
    review: string
    rating: number
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutFoodInput = {
    id?: string
    review: string
    rating: number
    userId: string
  }

  export type ReviewsCreateOrConnectWithoutFoodInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutFoodInput, ReviewsUncheckedCreateWithoutFoodInput>
  }

  export type ReviewsCreateManyFoodInputEnvelope = {
    data: ReviewsCreateManyFoodInput | ReviewsCreateManyFoodInput[]
  }

  export type ImagesUpsertWithWhereUniqueWithoutFoodInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutFoodInput, ImagesUncheckedUpdateWithoutFoodInput>
    create: XOR<ImagesCreateWithoutFoodInput, ImagesUncheckedCreateWithoutFoodInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutFoodInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutFoodInput, ImagesUncheckedUpdateWithoutFoodInput>
  }

  export type ImagesUpdateManyWithWhereWithoutFoodInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutFoodInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: StringFilter<"Images"> | string
    public_id?: StringFilter<"Images"> | string
    url?: StringFilter<"Images"> | string
    foodId?: StringFilter<"Images"> | string
  }

  export type RestaurantUpsertWithoutFoodsInput = {
    update: XOR<RestaurantUpdateWithoutFoodsInput, RestaurantUncheckedUpdateWithoutFoodsInput>
    create: XOR<RestaurantCreateWithoutFoodsInput, RestaurantUncheckedCreateWithoutFoodsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutFoodsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutFoodsInput, RestaurantUncheckedUpdateWithoutFoodsInput>
  }

  export type RestaurantUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: FloatFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutFoodInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutFoodInput, ReviewsUncheckedUpdateWithoutFoodInput>
    create: XOR<ReviewsCreateWithoutFoodInput, ReviewsUncheckedCreateWithoutFoodInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutFoodInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutFoodInput, ReviewsUncheckedUpdateWithoutFoodInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutFoodInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutFoodInput>
  }

  export type FoodsCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesCreateNestedManyWithoutFoodInput
    Reviews?: ReviewsCreateNestedManyWithoutFoodInput
  }

  export type FoodsUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImagesUncheckedCreateNestedManyWithoutFoodInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodsCreateOrConnectWithoutRestaurantInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutRestaurantInput, FoodsUncheckedCreateWithoutRestaurantInput>
  }

  export type FoodsCreateManyRestaurantInputEnvelope = {
    data: FoodsCreateManyRestaurantInput | FoodsCreateManyRestaurantInput[]
  }

  export type FoodsUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: FoodsWhereUniqueInput
    update: XOR<FoodsUpdateWithoutRestaurantInput, FoodsUncheckedUpdateWithoutRestaurantInput>
    create: XOR<FoodsCreateWithoutRestaurantInput, FoodsUncheckedCreateWithoutRestaurantInput>
  }

  export type FoodsUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: FoodsWhereUniqueInput
    data: XOR<FoodsUpdateWithoutRestaurantInput, FoodsUncheckedUpdateWithoutRestaurantInput>
  }

  export type FoodsUpdateManyWithWhereWithoutRestaurantInput = {
    where: FoodsScalarWhereInput
    data: XOR<FoodsUpdateManyMutationInput, FoodsUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type FoodsScalarWhereInput = {
    AND?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
    OR?: FoodsScalarWhereInput[]
    NOT?: FoodsScalarWhereInput | FoodsScalarWhereInput[]
    id?: StringFilter<"Foods"> | string
    name?: StringFilter<"Foods"> | string
    description?: StringFilter<"Foods"> | string
    price?: IntFilter<"Foods"> | number
    estimatedPrice?: IntNullableFilter<"Foods"> | number | null
    category?: StringFilter<"Foods"> | string
    restaurantId?: StringFilter<"Foods"> | string
    createdAt?: DateTimeFilter<"Foods"> | Date | string
    updatedAt?: DateTimeFilter<"Foods"> | Date | string
  }

  export type FoodsCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutFoodsInput
    Reviews?: ReviewsCreateNestedManyWithoutFoodInput
  }

  export type FoodsUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodsCreateOrConnectWithoutImagesInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutImagesInput, FoodsUncheckedCreateWithoutImagesInput>
  }

  export type FoodsUpsertWithoutImagesInput = {
    update: XOR<FoodsUpdateWithoutImagesInput, FoodsUncheckedUpdateWithoutImagesInput>
    create: XOR<FoodsCreateWithoutImagesInput, FoodsUncheckedCreateWithoutImagesInput>
    where?: FoodsWhereInput
  }

  export type FoodsUpdateToOneWithWhereWithoutImagesInput = {
    where?: FoodsWhereInput
    data: XOR<FoodsUpdateWithoutImagesInput, FoodsUncheckedUpdateWithoutImagesInput>
  }

  export type FoodsUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutFoodsNestedInput
    Reviews?: ReviewsUpdateManyWithoutFoodNestedInput
  }

  export type FoodsUncheckedUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Reviews?: ReviewsUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type ReviewsCreateManyUserInput = {
    id?: string
    review: string
    rating: number
    foodId: string
  }

  export type ReviewsUpdateWithoutUserInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    food?: FoodsUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    foodId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    foodId?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesCreateManyFoodInput = {
    id?: string
    public_id: string
    url: string
  }

  export type ReviewsCreateManyFoodInput = {
    id?: string
    review: string
    rating: number
    userId: string
  }

  export type ImagesUpdateWithoutFoodInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateWithoutFoodInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImagesUncheckedUpdateManyWithoutFoodInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpdateWithoutFoodInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutFoodInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutFoodInput = {
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FoodsCreateManyRestaurantInput = {
    id?: string
    name: string
    description: string
    price: number
    estimatedPrice?: number | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodsUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUpdateManyWithoutFoodNestedInput
    Reviews?: ReviewsUpdateManyWithoutFoodNestedInput
  }

  export type FoodsUncheckedUpdateWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImagesUncheckedUpdateManyWithoutFoodNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodsUncheckedUpdateManyWithoutRestaurantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    estimatedPrice?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodsCountOutputTypeDefaultArgs instead
     */
    export type FoodsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestaurantCountOutputTypeDefaultArgs instead
     */
    export type RestaurantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvatarsDefaultArgs instead
     */
    export type AvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvatarsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewsDefaultArgs instead
     */
    export type ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FoodsDefaultArgs instead
     */
    export type FoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RestaurantDefaultArgs instead
     */
    export type RestaurantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RestaurantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImagesDefaultArgs instead
     */
    export type ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImagesDefaultArgs<ExtArgs>

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