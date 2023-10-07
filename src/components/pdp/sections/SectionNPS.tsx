import React from 'react';
import Section from '../Section';
import Title from '../Title';
import SubTitle from '../SubTitle';
import ChartNPS from '../ChartNPS';

const TR = ({ children }) => <tr className='border-b-[1px] border-black border-opacity-30'>{children}</tr>
const TD = ({ children }) => <td className='p-1'>{children}</td>

export const SectionNPS: React.FC = () => {
  return (
    <Section className='min-h-screen my-20'>
      <Title>Net Promoter Score [NPS]</Title>
      <div className='flex items-center justify-center gap-4 flex-wrap my-8'>
        <div className='flex gap-2'>
          <div className='rounded-full h-6 w-6 bg-[#fc5f88]' />
          <p>Detratores</p>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full h-6 w-6 bg-[#fed76e]' />
          <p>Neutros</p>
        </div>
        <div className='flex gap-2'>
          <div className='rounded-full h-6 w-6 bg-[#14b477]' />
          <p>Promotores</p>
        </div>
      </div>
      <div>
        <div className='mt-4'>
          <SubTitle className='text-center my-12'>PDP Outubro 2023</SubTitle>
          <div className='flex items-center justify-between gap-4  max-md:flex-wrap max-md:justify-center mb-12'>
            <div className='rounded-xl border-[1px] border-red border-opacity-40 shadow-xl p-4'>
              <div className='font-semibold mb-4'>
                Coletado em Julho/2023
              </div>
              <div>
                <span className='font-semibold'>Convidados:</span> 7
              </div>
              <div>
                <span className='font-semibold'>Respondentes:</span> 6
              </div>
            </div>
            <div>
              <table className='text-center'>
                <thead className='border-b-2 border-red'>
                  <tr>
                    <th className='p-2'>Perfil dos Respondentes</th>
                    <th className='p-2'>Qtd</th>
                  </tr>
                </thead>
                <tbody>
                  <TR>
                    <TD>Director of Technical Engagement</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Principal Architect in Engineering</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Squad Leader</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Master Developer</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Mid-level Developer</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>QE</TD>
                    <TD>1</TD>
                  </TR>
                </tbody>
              </table>
            </div>
            <ChartNPS nps={100} />
          </div>
          <div className='flex items-center justify-between gap-4 max-md:flex-wrap max-md:justify-center'>
            <div className='rounded-xl border-[1px] border-red border-opacity-40 shadow-xl p-4'>
              <div className='font-semibold mb-4'>
                Coletado em Jan/2023
              </div>
              <div>
                <span className='font-semibold'>Convidados:</span> 7
              </div>
              <div>
                <span className='font-semibold'>Respondentes:</span> 7
              </div>
            </div>
            <div>
              <table className='text-center'>
                <thead className='border-b-2 border-red'>
                  <tr>
                    <th className='p-2'>Perfil dos Respondentes</th>
                    <th className='p-2'>Qtd</th>
                  </tr>
                </thead>
                <tbody>
                  <TR>
                    <TD>Senior Manager</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Squad Leader</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>BA</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Master Developer</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Senior Developer</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>QE</TD>
                    <TD>2</TD>
                  </TR>
                </tbody>
              </table>
            </div>
            <ChartNPS nps={100} />
          </div>
        </div>
        <div className='mt-4'>
          <SubTitle className='text-center my-12'>PDP Julho 2022 [Anterior]</SubTitle>
          <div className='flex items-center justify-between gap-4  max-md:flex-wrap max-md:justify-center'>
            <div className='rounded-xl border-[1px] border-red border-opacity-40 shadow-xl p-4'>
              <div className='font-semibold mb-4'>
                Coletado em Julho/2022
              </div>
              <div>
                <span className='font-semibold'>Convidados:</span> 11
              </div>
              <div>
                <span className='font-semibold'>Respondentes:</span> 9
              </div>
            </div>
            <div>
              <table className='text-center'>
                <thead className='border-b-2 border-red'>
                  <tr>
                    <th className='p-2'>Perfil dos Respondentes</th>
                    <th className='p-2'>QTD</th>
                  </tr>
                </thead>
                <tbody>
                  <TR >
                    <TD>Senior Manager</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Squad Leader</TD>
                    <TD>2</TD>
                  </TR>
                  <TR>
                    <TD>Principal Architect in Engineering</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Master Developer</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Senior Developer</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Mid-level Developer</TD>
                    <TD>1</TD>
                  </TR>
                  <TR>
                    <TD>Junior Developer</TD>
                    <TD>2</TD>
                  </TR>
                </tbody>
              </table>
            </div>
            <ChartNPS nps={100} />
          </div>
        </div>
      </div>
      <img src="/pdp/nps.png" alt="nps" className='w-full max-w-[180px] mx-auto mt-12' />
    </Section>
  )
}
