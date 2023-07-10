import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import axios from 'axios'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { Container } from '../../components/Container'

import {
  ButtonConfirm,
  Card,
  CartItems,
  CheckoutContainer,
  CheckoutFormInputs,
  ErrorMessage,
  ErrorMessageInput,
  Input,
  InputControl,
  InputsContainer,
  ListCartItems,
  PaymentMethod,
  PaymentMethodContainer,
  PaymentMethodRadioButton,
  Subtitle,
  Title,
  TitleMedium,
  TitleWithIcon,
  TotalItens,
  TotalItensLine,
} from './styles'

import { CartItem } from './CartItem'

import { formatMoney } from '../../utils/formatMoeney'

import { CartItemContext } from '../../contexts/CartItemContext'

const APIViaCep = 'https://viacep.com.br/ws/'

export function Checkout() {
  const navigate = useNavigate()
  const [validCep, setValidCep] = useState('')
  
const formCartValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP.').superRefine((val ,ctx) => {
    
    if(val.length !== 9 || validCep.hasOwnProperty('erro')) {
      ctx.addIssue({
        code: zod.ZodIssueCode.custom,
        message: `CEP inváldio!`,
      });
    }
    
  }),
  street: zod.string().min(1, 'Informe a Rua.'),
  streetNumber: zod.string().min(1, 'Informe o Número.'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o Bairro.'),
  city: zod.string().min(1, 'Informe a Cidade.'),
  uf: zod.string().min(2, 'Informe o UF.'),
  paymentMethod: zod.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'], {
    errorMap: (issue) => {
      if (issue.code == 'invalid_enum_value') {
        return { message: 'Selecione um método de pagamento.' };
      }
      return { message: 'Selecione um método de pagamento.' };
    },
  })
})

// interface FormCartData {
//   cep: string
//   street: string
// }
type FormCartData = zod.infer<typeof formCartValidationSchema>

  const { register, handleSubmit, formState, reset, setValue, setFocus } = useForm<FormCartData>({
    resolver: zodResolver(formCartValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      streetNumber: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
      paymentMethod: undefined
    },
  })

  const { cartItems, resetCart } = useContext(CartItemContext)

  const totalItensPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  let totalDeliveryPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * 1,
    5,
  )

  const deliveryFree =
    totalItensPrice >= 200 ? (totalDeliveryPrice = 0) : totalDeliveryPrice

  const totalPrice = totalItensPrice + totalDeliveryPrice

  function handleCheckCep(e: React.FocusEvent<HTMLInputElement>) {
    const cep = e.target.value.replace(/\D/g, '')

    if(cep.length >= 8) {
      axios
      .get(`${APIViaCep}${cep}/json/`)
      .then((response) => {
        setValidCep(response.data)

        if (!response.data.erro) {
          setValue('street', response.data.logradouro)
          setValue('district', response.data.bairro)
          setValue('city', response.data.localidade)
          setValue('uf', response.data.uf)
          setFocus('streetNumber')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }    
  }  

  function handleSubmitFormCheckout(data: FormCartData) {
    const deliveryData = {
      data: {
        ...data,
        totalItensPrice,
        totalDeliveryPrice,
        totalPrice,
      },
      cartItems,
    }
    reset()
    resetCart()

    navigate('/delivery-success', {
      state: deliveryData,
    })
  }

  return (
    <Container>
      {cartItems.length > 0 ? (
        <CheckoutContainer onSubmit={handleSubmit(handleSubmitFormCheckout)}>
          <CheckoutFormInputs>
            <Title>Complete seu pedido</Title>
            <Card>
              <TitleWithIcon>
                <MapPinLine />
                <TitleMedium>Endereço de Entrega</TitleMedium>
                <Subtitle>
                  Informe o endereço onde deseja receber seu pedido
                </Subtitle>
              </TitleWithIcon>
              <InputsContainer>
                <InputControl className="cep">
                  <Input
                    type="text"
                    placeholder="CEP"
                    {...register('cep')}
                    mask="99999-999"
                    maskPlaceholder=""
                    onBlur={handleCheckCep}
                    $hasError={!!formState?.errors?.cep}
                  />
                  <ErrorMessageInput>
                    {formState?.errors?.cep?.message}
                  </ErrorMessageInput>
                </InputControl>
                <InputControl className="street">
                  <Input
                    type="text"
                    placeholder="Rua"
                    {...register('street')}
                    mask=""
                    $hasError={!!formState?.errors?.street}
                  />
                  <ErrorMessageInput>
                    {formState?.errors?.street?.message}
                  </ErrorMessageInput>
                </InputControl>
                <InputControl>
                  <Input
                    type="text"
                    placeholder="Número"
                    {...register('streetNumber')}
                    mask="******"
                    maskPlaceholder=""
                    $hasError={!!formState?.errors?.streetNumber}
                  />
                  <ErrorMessageInput>
                    {formState?.errors?.streetNumber?.message}
                  </ErrorMessageInput>
                </InputControl>
                <InputControl className="complement optional">
                  <Input
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                    mask=""
                    $hasError={!!formState?.errors?.complement}
                  />
                </InputControl>
                <InputControl>
                  <Input
                    type="text"
                    placeholder="Bairro"
                    {...register('district')}
                    mask=""
                    $hasError={!!formState?.errors?.district}
                  />
                  <ErrorMessageInput>
                    {formState?.errors?.district?.message}
                  </ErrorMessageInput>
                </InputControl>
                <InputControl>
                  <Input
                    type="text"
                    placeholder="Cidade"
                    {...register('city')}
                    mask=""
                    $hasError={!!formState?.errors?.city}
                  />
                  <ErrorMessageInput>
                    {formState?.errors?.city?.message}
                  </ErrorMessageInput>
                </InputControl>
                <InputControl>
                  <Input
                    type="text"
                    placeholder="UF"
                    {...register('uf')}
                    mask="aa"
                    maskPlaceholder=""
                    $hasError={!!formState?.errors?.uf}
                  />
                  <ErrorMessageInput>
                    {formState?.errors?.uf?.message}
                  </ErrorMessageInput>
                </InputControl>
              </InputsContainer>
            </Card>
            <Card>
              <TitleWithIcon>
                <CurrencyDollar />
                <TitleMedium>Pagamento</TitleMedium>
                <Subtitle>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </Subtitle>
              </TitleWithIcon>
              <PaymentMethodContainer>
                <PaymentMethodRadioButton
                  type="radio"
                  id="radio1"
                  value="Cartão de Crédito"
                  {...register('paymentMethod')}
                />
                <PaymentMethod
                  htmlFor="radio1"
                  $hasError={!!formState?.errors?.paymentMethod}
                >
                  <CreditCard />
                  Cartão de Crédito
                </PaymentMethod>
                <PaymentMethodRadioButton
                  type="radio"
                  id="radio2"
                  value="Cartão de Débito"
                  {...register('paymentMethod')}
                />
                <PaymentMethod
                  htmlFor="radio2"
                  $hasError={!!formState?.errors?.paymentMethod}
                >
                  <Bank />
                  Cartão de Débito
                </PaymentMethod>
                <PaymentMethodRadioButton
                  type="radio"
                  id="radio3"
                  value="Dinheiro"
                  {...register('paymentMethod')}
                />
                <PaymentMethod
                  htmlFor="radio3"
                  $hasError={!!formState?.errors?.paymentMethod}
                >
                  <Money />
                  Dinheiro
                </PaymentMethod>
              </PaymentMethodContainer>
              <ErrorMessageInput>
                {formState?.errors?.paymentMethod?.message}
              </ErrorMessageInput>
            </Card>
          </CheckoutFormInputs>
          <CartItems>
            <Title>Cafés selecionados</Title>
            <Card>
              <ListCartItems>
                {cartItems.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      srcImage={item.srcImage}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  )
                })}
              </ListCartItems>
              <TotalItens>
                <TotalItensLine>
                  <span>Total de itens</span>
                  <span>R$ {formatMoney(totalItensPrice)}</span>
                </TotalItensLine>
                <TotalItensLine>
                  <span>Entrega</span>
                  {deliveryFree <= 0 ? (
                    <span>Frete Grátis</span>
                  ) : (
                    <span>R$ {formatMoney(totalDeliveryPrice)}</span>
                  )}
                </TotalItensLine>
                <TotalItensLine>
                  <span>Total</span>
                  <span>R$ {formatMoney(totalPrice)}</span>
                </TotalItensLine>
              </TotalItens>
              <ButtonConfirm type="submit">Confirmar pedido</ButtonConfirm>
            </Card>
          </CartItems>
        </CheckoutContainer>
      ) : (
        <ErrorMessage>
          <Title>Nenhum item adicionado ao carrinho</Title>
          <Subtitle>Por favor, volte a Home e adicione um produto</Subtitle>
        </ErrorMessage>
      )}
    </Container>
  )
}
